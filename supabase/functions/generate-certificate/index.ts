
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createCanvas, registerFont } from "https://deno.land/x/canvas@v1.4.1/mod.ts";
import { supabaseClient } from "../_shared/supabase-client.ts";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    // Get the userId and certificateId from the request
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
    const certificateId = url.searchParams.get("certificateId");

    if (!userId && !certificateId) {
      return new Response(JSON.stringify({ error: "Missing required parameters" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    let userData;
    let certificateData;

    // Get the user data
    if (userId) {
      const { data: user, error: userError } = await supabaseClient
        .from("users")
        .select("*")
        .eq("id", userId)
        .single();

      if (userError || !user) {
        console.error("Error fetching user:", userError);
        return new Response(
          JSON.stringify({ error: "User not found" }),
          {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 404,
          }
        );
      }

      userData = user;

      // Get the user's certificate
      const { data: certificate, error: certError } = await supabaseClient
        .from("certificates")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (certError || !certificate) {
        // If no certificate exists, create one
        const { data: userRank } = await supabaseClient
          .rpc("get_user_rank", { user_uuid: userId });

        const { data: totalDeposited } = await supabaseClient
          .rpc("get_user_total_deposits", { user_uuid: userId });

        const { data: newCert, error: createCertError } = await supabaseClient
          .from("certificates")
          .insert({
            user_id: userId,
            rank: userRank || 999,
            amount_spent: totalDeposited || 0,
            is_minted: false,
          })
          .select()
          .single();

        if (createCertError || !newCert) {
          console.error("Error creating certificate:", createCertError);
          return new Response(
            JSON.stringify({ error: "Failed to create certificate" }),
            {
              headers: { ...corsHeaders, "Content-Type": "application/json" },
              status: 500,
            }
          );
        }

        certificateData = newCert;
      } else {
        certificateData = certificate;
      }
    } else if (certificateId) {
      // Get certificate by ID
      const { data: certificate, error: certError } = await supabaseClient
        .from("certificates")
        .select("*")
        .eq("id", certificateId)
        .single();

      if (certError || !certificate) {
        console.error("Error fetching certificate:", certError);
        return new Response(
          JSON.stringify({ error: "Certificate not found" }),
          {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 404,
          }
        );
      }

      certificateData = certificate;

      // Get the user data
      const { data: user, error: userError } = await supabaseClient
        .from("users")
        .select("*")
        .eq("id", certificate.user_id)
        .single();

      if (userError || !user) {
        console.error("Error fetching user:", userError);
        return new Response(
          JSON.stringify({ error: "User not found" }),
          {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 404,
          }
        );
      }

      userData = user;
    }

    // Generate the certificate image
    const certificateImage = await generateCertificateImage(userData, certificateData);

    // Return the image
    return new Response(certificateImage, {
      headers: {
        ...corsHeaders,
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("Error generating certificate:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate certificate" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

async function generateCertificateImage(user: any, certificate: any) {
  // Create a canvas
  const width = 1200;
  const height = 800;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Set background color
  ctx.fillStyle = "#1a1a2e";
  ctx.fillRect(0, 0, width, height);

  // Add border
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 10;
  ctx.strokeRect(20, 20, width - 40, height - 40);

  // Add ornate corners
  const cornerSize = 100;
  // Top-left
  ctx.beginPath();
  ctx.moveTo(20, 60);
  ctx.lineTo(20, 20);
  ctx.lineTo(60, 20);
  ctx.stroke();
  // Top-right
  ctx.beginPath();
  ctx.moveTo(width - 60, 20);
  ctx.lineTo(width - 20, 20);
  ctx.lineTo(width - 20, 60);
  ctx.stroke();
  // Bottom-left
  ctx.beginPath();
  ctx.moveTo(20, height - 60);
  ctx.lineTo(20, height - 20);
  ctx.lineTo(60, height - 20);
  ctx.stroke();
  // Bottom-right
  ctx.beginPath();
  ctx.moveTo(width - 60, height - 20);
  ctx.lineTo(width - 20, height - 20);
  ctx.lineTo(width - 20, height - 60);
  ctx.stroke();

  // Add title
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 60px serif";
  ctx.textAlign = "center";
  ctx.fillText("Certificate of Nobility", width / 2, 120);

  // Add royal seal
  ctx.beginPath();
  ctx.arc(width / 2, 190, 40, 0, Math.PI * 2);
  ctx.fillStyle = "#ffd700";
  ctx.fill();
  ctx.strokeStyle = "#8B0000";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Add user information
  ctx.fillStyle = "#ffffff";
  ctx.font = "36px serif";
  ctx.textAlign = "center";
  ctx.fillText(`This certifies that`, width / 2, 280);

  // Add username
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 50px serif";
  ctx.fillText(user.username || "Royal Guest", width / 2, 350);

  // Add rank information
  ctx.fillStyle = "#ffffff";
  ctx.font = "30px serif";
  ctx.fillText(`has attained the rank of`, width / 2, 410);

  // Add rank
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 70px serif";
  ctx.fillText(`#${certificate.rank}`, width / 2, 490);

  // Add contribution amount
  ctx.fillStyle = "#ffffff";
  ctx.font = "28px serif";
  ctx.fillText(`with a royal contribution of`, width / 2, 550);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 50px serif";
  ctx.fillText(`$${certificate.amount_spent.toLocaleString()}`, width / 2, 610);

  // Add date
  const issueDate = new Date(certificate.created_at);
  ctx.fillStyle = "#ffffff";
  ctx.font = "28px serif";
  ctx.fillText(`Issued on the ${issueDate.getDate()}${getDaySuffix(issueDate.getDate())} day of ${getMonthName(issueDate.getMonth())} in the year ${issueDate.getFullYear()}`, width / 2, 680);

  // Add additional information at the bottom
  ctx.fillStyle = "#aaaaaa";
  ctx.font = "20px serif";
  ctx.fillText(`Certificate ID: ${certificate.id}`, width / 2, 730);
  
  // If the certificate is minted, add NFT information
  if (certificate.is_minted && certificate.mint_address) {
    ctx.fillText(`Solana NFT: ${certificate.mint_address}`, width / 2, 760);
  }

  // Return the image as a buffer
  return canvas.toBuffer();
}

function getDaySuffix(day: number): string {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

function getMonthName(month: number): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months[month];
}
