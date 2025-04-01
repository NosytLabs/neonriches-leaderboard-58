
// This is a simple re-export file to handle casing issues on different operating systems
// Use a consistent re-export to solve casing issues
import { Shell } from '@/components/ui/Shell';
export { Shell };

// Make sure we're exporting it as the default too
const ShellComponent = Shell;
export default ShellComponent;
