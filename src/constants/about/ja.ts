import { NAME, SENDAI_IMG, STACK } from './shared';
import type { AboutContent } from './types';

// The narrative is hand-written by Carlos in Japanese: keep it verbatim.
export const ja: AboutContent = {
  title: '私について',
  coverTitle: '私について',
  name: NAME,
  jobTitle: '情報工学エンジニア',
  kicker: '情報工学 学士 · ハエン大学（2026年卒業）',
  role: 'AI・3Dグラフィックス・ゲーム開発',
  tagline:
    'C++・Unity・OpenGLでの開発に取り組み、卒業研究ではReactとTensorFlow.jsを用いてブラウザ上で動作する説明可能AI（XAI）を実装しました。',
  badges: {
    availability: '2026年11月より入社可能',
    languages: 'スペイン語 · 英語 C1 · 日本語 上級',
    location: 'スペイン（マラガ）在住',
  },
  stack: STACK,
  labels: {
    skills: 'スキル',
    education: '学歴',
    experience: '職歴',
    career: '職歴・学歴',
    contact: 'お問い合わせ',
    downloadCv: '職務経歴書をダウンロード',
    viewProjects: 'プロジェクトを見る',
    aboutMe: '私について',
    projects: 'プロジェクト',
    allProjects: 'すべてのプロジェクト（{count}件）を見る',
    featured: '卒業研究',
    demo: 'デモ',
    code: 'コード',
    video: '動画',
    pdf: '論文（PDF）',
    viewProject: '詳細を見る',
    noAiNote: 'いずれも大学で制作したプロジェクトで、AIアシスタントを使わずにすべて自分でコードを書きました。',
    contactTitle: 'お気軽にご連絡ください',
    contactText: '{email} までメールをお送りいただくか、LinkedIn・GitHubからご連絡ください。',
    facts: {
      title: 'プロジェクト概要',
      type: '種類',
      role: '担当',
      stack: '使用技術',
      links: 'リンク',
      development: '開発',
      noAi: 'AIアシスタント不使用・すべて自作',
    },
  },
  cvHref: '/cv/Shokumu_Keirekisho_Carlos_Requena.pdf',
  cvFileName: '職務経歴書_RequenaCarlos.pdf',
  narrative: [
    {
      type: 'p',
      text: 'カルロスと申します。コンピューターサイエンスの世界に飛び込みました。現在は情報工学を専攻しており、特にニューラルネットワーク（人工知能）を専門としています。',
    },
    { type: 'p', text: '日本での留学経験を通じて、AIや最新技術への関心がより一層深まりました。' },
    { type: 'p', text: '日本文化と言語を愛しており、プロフェッショナルなレベルまで日本語を学ぶことができました。' },
    { type: 'h', text: '趣味について' },
    {
      type: 'p',
      text: '子供の頃からパソコンに興味を持たれてきました。父親にパソコンを触らせてくれた日以来、良いことにパソコンやゲームから離れることが出来ませんでした。',
    },
    {
      type: 'p',
      text: '私の趣味はパソコンやゲームの世界だけで留まりません。健康的なライフスタイルを維持するため、ジムでの筋トレにも情熱を注いでいます。身体と筋肉を鍛えることで工学者としてのパーフォマンスを上昇できます。',
    },
    { type: 'h', text: '日本での経験' },
    {
      type: 'p',
      text: '1年間、立命館大学の交換留学生として日本で勉強する機会に恵まれ、そこで語学力と人工知能の知識を深めることができました。尚且つ、日本に対しての関心はより強調するようになりました。',
    },
    { type: 'p', text: 'もちろん、日本が提供するエンターテインメント文化も大いに楽しむことができました。' },
    { type: 'img', src: SENDAI_IMG, alt: '仙台駅前' },
  ],
  skills: [
    {
      icon: 'ri:code-s-slash-line',
      title: 'プログラミング言語',
      items: ['C++', 'C#', 'JavaScript / TypeScript', 'Java', 'GLSL'],
    },
    { icon: 'ri:gamepad-line', title: 'エンジン・グラフィックス', items: ['Unity', 'OpenGL', '3Dレンダリング'] },
    {
      icon: 'ri:brain-line',
      title: 'AI・最適化',
      items: ['ニューラルネットワーク', '説明可能AI（SHAP・LRP）', 'メタヒューリスティクス', '遺伝的アルゴリズム'],
    },
    { icon: 'ri:global-line', title: 'Web', items: ['React', 'TensorFlow.js'] },
    { icon: 'ri:tools-line', title: 'ツール', items: ['Git', 'Linux', 'Visual Studio', 'VS Code'] },
    {
      icon: 'ri:translate-2',
      title: '言語',
      items: ['スペイン語（母語）', '英語（C1 ケンブリッジ）', '日本語（N2〜N1相当・2026年12月 JLPT N2 受験予定）'],
    },
  ],
  experience: [
    {
      period: '2024 – 2025',
      title: '英語・スペイン語講師',
      org: '語学学校 · 大阪',
      description: '日本人生徒への語学指導をすべて日本語で実施（交換留学と並行）。',
      icon: 'ri:presentation-line',
    },
    {
      period: '2023年 夏',
      title: '販売スタッフ',
      org: 'エル・コルテ・イングレス（スペイン）',
      description: '夏季繁忙期の接客と、英語での外国人客対応を担当。',
      icon: 'ri:store-2-line',
    },
  ],
  education: [
    {
      period: '2021 – 2026',
      title: '情報工学 学士',
      org: 'ハエン大学（スペイン）',
      description: '2026年卒業。卒業研究：Nets4Learning向け説明可能AIモジュール（SIMIDAT研究グループ）。',
      icon: 'ri:graduation-cap-line',
    },
    {
      period: '2024 – 2025',
      title: '交換留学',
      org: '立命館大学 · 大阪',
      description:
        '人工知能と上級日本語を履修。英語で Pattern Recognition、Distributed Systems、Operating Systems、Applied Informatics を受講。ゲーム向け生成AI（IEEE CoG 2024）と深層強化学習の論文を英語で発表し、日本語では若者の仕事観に関するインタビュー調査と日本のゲーマー事情について発表。',
      icon: 'ri:global-line',
    },
  ],
};
