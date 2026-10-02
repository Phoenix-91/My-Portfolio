import { CONTRIBUTIONS, CONTRIBUTION_TOTAL } from '@/data/contributions';

export default function GithubGraph() {
  const cells = [...CONTRIBUTIONS].sort((a, b) => (a[0] < b[0] ? -1 : 1));
  return (
    <div className="card gh">
      <h3>GitHub activity · {CONTRIBUTION_TOTAL} contributions in the last year</h3>
      <div className="gh-scroll">
        <div id="cal" role="img" aria-label="GitHub contribution graph for the last year">
          {cells.map(([date, level]) => <i key={date} data-l={level} title={date} />)}
        </div>
      </div>
    </div>
  );
}
