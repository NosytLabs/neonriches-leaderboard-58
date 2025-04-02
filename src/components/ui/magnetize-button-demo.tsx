
import { MagnetizeButton } from "@/components/ui/magnetize-button"
import { TeamColor } from "@/types/team"

function MagnetizeButtonDemo() {
    // Array of TeamColor options to display
    const colorOptions: TeamColor[] = ['purple', 'red', 'blue', 'green', 'gold'];
    
    return (
        <div className="flex flex-col gap-4 items-center">
            <h3 className="text-lg font-medium mb-2">Magnetize Button Variants</h3>
            
            <div className="flex flex-wrap gap-4 justify-center">
                {colorOptions.map((color) => (
                    <MagnetizeButton 
                        key={color}
                        color={color} 
                        particleCount={14} 
                        attractRadius={50}
                    >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </MagnetizeButton>
                ))}
            </div>
        </div>
    )
}

export { MagnetizeButtonDemo }
