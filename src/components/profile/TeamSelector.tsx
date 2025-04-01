
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface TeamSelectorProps {
  onTeamChange: (team: "red" | "blue" | "green") => void;
  team?: "red" | "blue" | "green";
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ onTeamChange, team = "red" }) => {
  return (
    <RadioGroup 
      defaultValue={team}
      onValueChange={(value) => onTeamChange(value as "red" | "blue" | "green")}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <Card className="cursor-pointer border-2 border-transparent hover:border-royal-crimson/50 transition-all">
        <CardContent className="p-4">
          <RadioGroupItem value="red" id="team-red" className="peer sr-only" />
          <Label
            htmlFor="team-red"
            className="flex flex-col items-center justify-between rounded-md p-4 hover:bg-royal-crimson/5 peer-data-[state=checked]:border-royal-crimson peer-data-[state=checked]:bg-royal-crimson/10"
          >
            <Shield className="mb-3 h-6 w-6 text-royal-crimson" />
            <div className="text-center">
              <h3 className="font-medium">Crimson Crown</h3>
              <p className="text-xs text-muted-foreground">The valiant warriors</p>
            </div>
          </Label>
        </CardContent>
      </Card>

      <Card className="cursor-pointer border-2 border-transparent hover:border-royal-gold/50 transition-all">
        <CardContent className="p-4">
          <RadioGroupItem value="green" id="team-green" className="peer sr-only" />
          <Label
            htmlFor="team-green"
            className="flex flex-col items-center justify-between rounded-md p-4 hover:bg-royal-gold/5 peer-data-[state=checked]:border-royal-gold peer-data-[state=checked]:bg-royal-gold/10"
          >
            <Shield className="mb-3 h-6 w-6 text-royal-gold" />
            <div className="text-center">
              <h3 className="font-medium">Golden Order</h3>
              <p className="text-xs text-muted-foreground">The wealthy merchants</p>
            </div>
          </Label>
        </CardContent>
      </Card>

      <Card className="cursor-pointer border-2 border-transparent hover:border-royal-navy/50 transition-all">
        <CardContent className="p-4">
          <RadioGroupItem value="blue" id="team-blue" className="peer sr-only" />
          <Label
            htmlFor="team-blue"
            className="flex flex-col items-center justify-between rounded-md p-4 hover:bg-royal-navy/5 peer-data-[state=checked]:border-royal-navy peer-data-[state=checked]:bg-royal-navy/10"
          >
            <Shield className="mb-3 h-6 w-6 text-royal-navy" />
            <div className="text-center">
              <h3 className="font-medium">Azure Knights</h3>
              <p className="text-xs text-muted-foreground">The noble strategists</p>
            </div>
          </Label>
        </CardContent>
      </Card>
    </RadioGroup>
  );
};

export default TeamSelector;
