// Initialize Vercel Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights';

// Inject Speed Insights when the page loads
if (typeof window !== 'undefined') {
  injectSpeedInsights();
}
