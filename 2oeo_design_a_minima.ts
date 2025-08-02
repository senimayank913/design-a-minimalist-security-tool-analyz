// 2oeo_design_a_minima.ts

interface SecurityTool {
  name: string;
  description: string;
  threatLevel: number; // 1-5, 1 being low, 5 being high
}

interface AnalysisResult {
  vulnerabilities: string[];
  recommendations: string[];
}

class SecurityAnalyzer {
  private tools: SecurityTool[];
  private analysisResults: { [key: string]: AnalysisResult };

  constructor(tools: SecurityTool[]) {
    this.tools = tools;
    this.analysisResults = {};
  }

  analyzeTool(toolName: string): AnalysisResult {
    const tool = this.tools.find(t => t.name === toolName);
    if (!tool) {
      throw new Error(`Tool not found: ${toolName}`);
    }

    const vulnerabilities: string[] = [];
    const recommendations: string[] = [];

    // Simple analysis logic, can be extended or replaced with more advanced analysis
    if (tool.threatLevel >= 3) {
      vulnerabilities.push(`High threat level (${tool.threatLevel})`);
    }
    if (!tool.description || tool.description.trim() === '') {
      recommendations.push('Provide a detailed description');
    }

    this.analysisResults[toolName] = { vulnerabilities, recommendations };
    return this.analysisResults[toolName];
  }

  getAnalysisResults(): { [key: string]: AnalysisResult } {
    return this.analysisResults;
  }
}

// Example usage
const tools: SecurityTool[] = [
  {
    name: 'Tool 1',
    description: 'A simple tool',
    threatLevel: 2,
  },
  {
    name: 'Tool 2',
    description: '',
    threatLevel: 4,
  },
  {
    name: 'Tool 3',
    description: 'A complex tool',
    threatLevel: 1,
  },
];

const analyzer = new SecurityAnalyzer(tools);
console.log(analyzer.analyzeTool('Tool 1'));
console.log(analyzer.getAnalysisResults());