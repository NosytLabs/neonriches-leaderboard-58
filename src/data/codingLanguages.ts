
import { ReactNode } from 'react';
import { Terminal, Server, Database, Globe, Box, Code, BookOpen, Cpu } from 'lucide-react';
import { CodeLanguage } from '@/types/code';

export const codingLanguages: CodeLanguage[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    subtitle: 'The Scribe of the Web',
    icon: Terminal,
    description: 'The versatile language of the web, used by royal scribes to create interactive scrolls.',
    difficulty: 'Beginner',
    royalDecree: 'By order of the Crown, JavaScript shall be the primary language of the realm\'s interactive scrolls and magical interfaces.',
    codeExample: `// A royal greeting function
function greetNoble(name, title) {
  return \`Hail, ${title} ${name}! Welcome to the Royal Court.\`;
}

// Announce the arrival of a noble
const message = greetNoble("Arthur", "Sir");
console.log(message);`,
    usedFor: ['Web Development', 'Frontend', 'Backend', 'Mobile Apps'],
    learningResources: 12,
    tags: ['Frontend', 'Versatile', 'Essential']
  },
  {
    id: 'python',
    name: 'Python',
    subtitle: 'The Alchemist\'s Choice',
    icon: Server,
    description: 'A powerful yet elegant language favored by the kingdom\'s alchemists and scholars.',
    difficulty: 'Beginner',
    royalDecree: 'The Royal Academy of Sciences hereby declares Python as the official language for scientific computations and alchemical formulations.',
    codeExample: `# A simple potion recipe calculator
def calculate_potion_potency(ingredients, brew_time):
    base_potency = sum(ingredient.magical_power for ingredient in ingredients)
    return base_potency * (brew_time / 60)

# Gather the ingredients
dragon_scales = {"name": "Dragon Scales", "magical_power": 75}
moonstone = {"name": "Moonstone Dust", "magical_power": 45}
ingredients = [dragon_scales, moonstone]

# Calculate the potency
potency = calculate_potion_potency(ingredients, 120)
print(f"The potion potency is {potency} units of magical power.")`,
    usedFor: ['Data Science', 'AI', 'Web Development', 'Automation'],
    learningResources: 15,
    tags: ['Beginner-friendly', 'Versatile', 'Data Science']
  },
  {
    id: 'sql',
    name: 'SQL',
    subtitle: 'The Keeper of Records',
    icon: Database,
    description: 'The ancient language used to query the kingdom\'s vast archives and treasure records.',
    difficulty: 'Intermediate',
    royalDecree: 'All royal treasuries, census data, and kingdom archives shall be maintained through SQL, as decreed by the Royal Recordkeeper.',
    codeExample: `-- Query the royal treasury
SELECT 
  treasure_name,
  value_in_gold_coins,
  date_acquired
FROM royal_treasury
WHERE value_in_gold_coins > 1000
ORDER BY value_in_gold_coins DESC
LIMIT 5;

-- Result: The kingdom's most valuable treasures`,
    usedFor: ['Database Management', 'Data Analysis', 'Backend Development'],
    learningResources: 8,
    tags: ['Databases', 'Essential', 'Query Language']
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    subtitle: 'The Royal Messenger',
    icon: Globe,
    description: 'The swift courier that delivers messages between the kingdom\'s various services.',
    difficulty: 'Intermediate',
    royalDecree: 'The Royal Communications Office shall utilize Node.js for all message brokering and service coordination throughout the realm.',
    codeExample: `// Create a royal messaging service
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Royal decree endpoint
app.post('/api/decrees', (req, res) => {
  const { title, content, urgency } = req.body;
  
  // Save decree to the royal archives
  console.log(\`New decree: \${title} (Urgency: \${urgency})\`);
  
  // Dispatch royal messengers
  dispatchMessengers(content, urgency);
  
  res.status(201).json({ message: "Royal decree published" });
});

app.listen(port, () => {
  console.log(\`Royal messaging service listening on port \${port}\`);
});`,
    usedFor: ['Backend Development', 'API Development', 'Real-time Applications'],
    learningResources: 10,
    tags: ['Backend', 'JavaScript', 'Server-side']
  },
  {
    id: 'java',
    name: 'Java',
    subtitle: 'The Castle Builder',
    icon: Box,
    description: 'A robust language used to construct the kingdom\'s most enduring and complex structures.',
    difficulty: 'Hard',
    royalDecree: 'For all strategic systems of the kingdom requiring longevity and stability, Java shall be the architectural language of choice.',
    codeExample: `// Define a royal castle blueprint
public class Castle {
    private String name;
    private int towerCount;
    private boolean hasMoat;
    
    public Castle(String name, int towerCount, boolean hasMoat) {
        this.name = name;
        this.towerCount = towerCount;
        this.hasMoat = hasMoat;
    }
    
    public void defendAgainstSiege(int attackerCount) {
        System.out.println("Castle " + name + " is under attack by " + attackerCount + " enemies!");
        
        if (hasMoat) {
            System.out.println("The moat slows down the attackers!");
        }
        
        int defenseStrength = towerCount * 25;
        System.out.println("Defense strength: " + defenseStrength);
    }
    
    public static void main(String[] args) {
        Castle royalFortress = new Castle("Royal Fortress", 8, true);
        royalFortress.defendAgainstSiege(500);
    }
}`,
    usedFor: ['Enterprise Applications', 'Android Development', 'Large-scale Systems'],
    learningResources: 14,
    tags: ['Enterprise', 'Cross-platform', 'Object-oriented']
  },
  {
    id: 'csharp',
    name: 'C#',
    subtitle: 'The Royal Engineer',
    icon: Cpu,
    description: 'The precise language used by the kingdom\'s engineers to build powerful tools and war machines.',
    difficulty: 'Hard',
    royalDecree: 'The Royal Engineering Guild establishes C# as the standard for kingdom infrastructure, war machines, and mechanical enchantments.',
    codeExample: `// Design a royal siege engine
using System;

namespace RoyalSiegeEngineering
{
    public class TrebuchetCalculator
    {
        public double CalculateProjectilePath(double weight, double counterWeight, double armLength, double targetDistance)
        {
            double forceRatio = counterWeight / weight;
            double launchAngle = Math.Atan(targetDistance / armLength) * (180 / Math.PI);
            double launchVelocity = Math.Sqrt(2 * 9.8 * armLength * forceRatio);
            
            Console.WriteLine($"Launch angle: {launchAngle:F2} degrees");
            Console.WriteLine($"Launch velocity: {launchVelocity:F2} m/s");
            
            return launchVelocity;
        }
        
        public static void Main(string[] args)
        {
            var calculator = new TrebuchetCalculator();
            double velocity = calculator.CalculateProjectilePath(50, 1000, 10, 200);
            Console.WriteLine($"The royal engineers predict a successful siege!");
        }
    }
}`,
    usedFor: ['Game Development', '.NET Applications', 'Windows Development', 'Unity'],
    learningResources: 12,
    tags: ['Microsoft', 'Game Dev', 'Enterprise']
  },
  {
    id: 'php',
    name: 'PHP',
    subtitle: 'The Royal Archivist',
    icon: BookOpen,
    description: 'The traditional language used to maintain the kingdom\'s archives and public notices.',
    difficulty: 'Intermediate',
    royalDecree: 'The Keeper of the Archives shall continue the use of PHP for maintaining royal proclamations and public records.',
    codeExample: `<?php
// Royal Archive System
class RoyalArchive {
    private $connection;
    
    public function __construct($host, $user, $pass, $db) {
        $this->connection = new mysqli($host, $user, $pass, $db);
        if ($this->connection->connect_error) {
            die("The royal archive is currently sealed: " . $this->connection->connect_error);
        }
    }
    
    public function recordDecree($title, $content, $issuedBy, $date) {
        $stmt = $this->connection->prepare("INSERT INTO royal_decrees 
            (title, content, issued_by, decree_date) 
            VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $title, $content, $issuedBy, $date);
        
        if ($stmt->execute()) {
            echo "Royal decree has been recorded in the archives.";
            return true;
        } else {
            echo "Failed to record the decree: " . $stmt->error;
            return false;
        }
    }
}

// Create new archive entry
$archive = new RoyalArchive("localhost", "royal_scribe", "secret_password", "kingdom_records");
$archive->recordDecree(
    "Tax Reduction on Mead", 
    "By royal decree, the tax on mead shall be reduced by 10% for the duration of the summer festival.",
    "King Edward III",
    "1345-06-15"
);
?>`,
    usedFor: ['Web Development', 'Content Management', 'Server-side Scripting'],
    learningResources: 9,
    tags: ['Web', 'Backend', 'Legacy']
  },
  {
    id: 'ruby',
    name: 'Ruby',
    subtitle: 'The Court Jeweler',
    icon: Code,
    description: 'An elegant language that crafts beautiful and valuable solutions for the royal court.',
    difficulty: 'Intermediate',
    royalDecree: 'The Guild of Royal Craftsmen recommends Ruby for its elegance and beauty in crafting the finest digital jewels of the realm.',
    codeExample: `# Royal Jewel Classification System
class RoyalJewel
  attr_accessor :name, :type, :carat, :color, :clarity
  
  def initialize(name, type, carat, color, clarity)
    @name = name
    @type = type
    @carat = carat
    @color = color
    @clarity = clarity
  end
  
  def calculate_value
    base_value = case @type
      when :diamond then 1000
      when :ruby then 800
      when :emerald then 750
      when :sapphire then 700
      else 500
    end
    
    value = base_value * @carat
    value *= 1.5 if color == :exceptional
    value *= 1.3 if clarity == :flawless
    
    return value
  end
  
  def display_royal_appraisal
    value = calculate_value
    puts "== Royal Jeweler's Appraisal =="
    puts "Jewel: #{@name}"
    puts "Type: #{@type.to_s.capitalize}"
    puts "Weight: #{@carat} carats"
    puts "Color: #{@color.to_s.capitalize}"
    puts "Clarity: #{@clarity.to_s.capitalize}"
    puts "Estimated value: #{value} gold coins"
    puts "==========================="
  end
end

# Create a royal jewel
crown_jewel = RoyalJewel.new("Star of the North", :diamond, 12.5, :exceptional, :flawless)
crown_jewel.display_royal_appraisal`,
    usedFor: ['Web Development', 'Automation', 'Rapid Prototyping'],
    learningResources: 7,
    tags: ['Elegant', 'Productivity', 'Web']
  },
  {
    id: 'go',
    name: 'Go',
    subtitle: 'The Royal Explorer',
    icon: Globe,
    description: 'A swift language used by the kingdom\'s explorers to chart new territories and build efficient outposts.',
    difficulty: 'Intermediate',
    royalDecree: 'The Royal Geographic Society endorses Go for all new explorations, mapping expeditions, and outpost establishments.',
    codeExample: `// Kingdom Expansion Planner
package main

import (
	"fmt"
	"time"
)

type Outpost struct {
	Name          string
	Location      string
	EstablishedOn time.Time
	Garrison      int
	Resources     map[string]int
}

func NewOutpost(name, location string, garrison int) *Outpost {
	resources := make(map[string]int)
	resources["wood"] = 100
	resources["stone"] = 50
	resources["food"] = 200
	
	return &Outpost{
		Name:          name,
		Location:      location,
		EstablishedOn: time.Now(),
		Garrison:      garrison,
		Resources:     resources,
	}
}

func (o *Outpost) ExpandTerritory(squareKm int) {
	resourcesNeeded := squareKm * 10
	
	if o.Resources["wood"] >= resourcesNeeded && o.Garrison >= squareKm {
		fmt.Printf("Expanding %s outpost by %d square kilometers...\\n", o.Name, squareKm)
		o.Resources["wood"] -= resourcesNeeded
		fmt.Printf("Territory claimed for the kingdom! Remaining wood: %d units\\n", o.Resources["wood"])
	} else {
		fmt.Println("Cannot expand: insufficient resources or garrison")
	}
}

func main() {
	// Establish a new outpost
	borderOutpost := NewOutpost("Northern Watch", "Frostpeak Mountains", 25)
	
	fmt.Printf("Outpost %s established at %s with %d soldiers\\n", 
		borderOutpost.Name, borderOutpost.Location, borderOutpost.Garrison)
	
	// Expand the kingdom's territory
	borderOutpost.ExpandTerritory(2)
}`,
    usedFor: ['Backend Development', 'Cloud Services', 'Distributed Systems'],
    learningResources: 8,
    tags: ['Fast', 'Concurrent', 'Modern']
  },
];
