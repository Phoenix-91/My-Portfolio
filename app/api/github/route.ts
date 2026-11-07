import { NextResponse } from "next/server";
export const revalidate = 3600;
const USER = "Phoenix-91";
// Live contribution data. With GITHUB_TOKEN set it uses GitHub's official GraphQL API; otherwise a public mirror of the profile graph.
export async function GET() {
  try {
    let days: { date: string; count: number; level: number }[];
    const token = process.env.GITHUB_TOKEN;
    if (token) {
      const query = `query($u:String!){user(login:$u){contributionsCollection{contributionCalendar{weeks{contributionDays{date contributionCount contributionLevel}}}}}}`;
      const r = await fetch("https://api.github.com/graphql", { method: "POST", headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ query, variables: { u: USER } }), next: { revalidate: 3600 } });
      if (!r.ok) throw new Error("graphql");
      const lv: Record<string, number> = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
      const j = await r.json();
      days = j.data.user.contributionsCollection.contributionCalendar.weeks.flatMap((w: any) => w.contributionDays.map((d: any) => ({ date: d.date, count: d.contributionCount, level: lv[d.contributionLevel] ?? 0 })));
    } else {
      const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, { next: { revalidate: 3600 } });
      if (!r.ok) throw new Error("mirror");
      days = (await r.json()).contributions;
    }
    if (!days?.length) throw new Error("empty");
    return NextResponse.json({ user: USER, days }, { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" } });
  } catch { return NextResponse.json({ error: "Couldn't load GitHub activity." }, { status: 502 }); }
}
