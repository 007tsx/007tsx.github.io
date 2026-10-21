export type Work = {
  year: string;
  title: string;
  meta: string;
  description: string;
  href: string;
};

export const works: Work[] = [
  {
    year: '2026',
    title: '提出物Ultra',
    meta: 'Android / Kotlin',
    description:
      '提出物の出し忘れを防ぐアプリ。締切ではなく「これを過ぎたらたぶん間に合わない」開始時刻を計算して、その時刻に通知します。',
    href: 'https://github.com/007tsx/submission-ultra',
  },
  {
    year: '2026',
    title: 'dopagaki',
    meta: 'TypeScript / Claude Code Mod',
    description:
      'Claude Code の画面を虹色にする Mod。本体のファイルは書き換えず、描画だけを差し替えます。',
    href: 'https://github.com/007tsx/dopagaki-claude-code',
  },
  {
    year: '2026',
    title: 'dopagaki status line',
    meta: 'Python / CLI',
    description:
      'Claude Code 用の3行ステータスライン。使用量、コンテキスト残量、キャッシュヒット率、コストを表示します。',
    href: 'https://github.com/007tsx/claude-code-dopagaki-line',
  },
];
