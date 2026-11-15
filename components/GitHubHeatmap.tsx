'use client';
import GitHubCalendar from 'react-github-calendar';

const theme = {
  dark: ['#1b1d1b', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

export default function GitHubHeatmap() {
  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username="phoenix-91"
        colorScheme="dark"
        theme={theme}
        blockSize={12}
        blockMargin={3}
        blockRadius={2}
        fontSize={12}
        hideColorLegend={false}
        hideMonthLabels={false}
        hideTotalCount={false}
        style={{ width: '100%' }}
      />
    </div>
  );
}
