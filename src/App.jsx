import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import tistoryLogo from './assets/tistory.svg'
import instagramLogo from './assets/instagram.svg'
import githubLogo from './assets/github.svg'
import './App.css'

const TISTORY_RSS_URL = 'https://doseobujang.tistory.com/rss'

function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const hash = location.hash.replace('#', '')
    if (!hash || hash.startsWith('/')) return

    // Use id lookup first to avoid invalid CSS selector crashes.
    const byId = document.getElementById(hash)
    if (byId) {
      byId.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/tistory" element={<TistoryPage />} />
        <Route path="/blog" element={<Navigate to="/tistory" replace />} />
        <Route path="/blog/:slug" element={<Navigate to="/tistory" replace />} />
        <Route path="/poems" element={<PoemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

function HomePage() {
  useHashScroll()

  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <Link className="brand" to="/">
            doseobujang
          </Link>
          <div className="nav-links">
            <Link to="/#about">About</Link>
            <Link to="/#credentials">Credentials</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#sns">SNS</Link>
            <Link to="/tistory">Tistory</Link>
            <Link to="/culture">Culture</Link>
            <Link to="/poems">Poems</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio + Personal SNS</p>
            <h1>미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.</h1>
            <p className="subtitle">
              도서부장이라는 이름으로 책, 개발, 일상의 기록을 모아두는 개인
              아카이브. 프로젝트와 생각을 한곳에 정리했습니다.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/#projects">
                프로젝트 보기
              </Link>
              <Link className="btn ghost" to="/tistory">
                티스토리 글 보기
              </Link>
              <Link className="btn ghost" to="/poems">
                시 보관함
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="card-title">Now</p>
              <p className="card-text">
                읽고 쓰고 만드는 과정 전체를 기록하는 중. 작은 실험들을
                천천히 쌓아갑니다.
              </p>
              <div className="pill-row">
                <span className="pill">Writing</span>
                <span className="pill">Building</span>
                <span className="pill">Reading</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-header">
            <h2>About</h2>
            <p>
              내가 좋아하는 것들을 하나의 흐름으로 묶어 보여주는 공간입니다.
              책, 코드, 일상 기록이 서로 이어질 수 있도록 큐레이션하고 있어요.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>기록 방식</h3>
              <p>
                긴 글은 티스토리에, 순간의 감정과 사진은 인스타그램에, 작업물은
                깃허브에 정리합니다.
              </p>
            </div>
            <div className="about-card">
              <h3>관심 키워드</h3>
              <p>
                독서, 웹 실험, 생산성, 그리고 개인적인 리서치를 중심으로
                탐구합니다.
              </p>
            </div>
            <div className="about-card">
              <h3>앞으로</h3>
              <p>
                프로젝트 단위로 기록을 남기고, 스스로의 성장을 추적할 수 있는
                아카이브를 만드는 것이 목표입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="credentials">
          <div className="section-header">
            <h2>Credentials</h2>
            <p>처음에는 핵심만, 클릭하면 자세한 내용을 볼 수 있습니다.</p>
          </div>
          <div className="credential-list">
            <details className="credential-card">
              <summary>
                <span className="credential-title">학력</span>
                <span className="credential-meta">전공 · 학교명</span>
              </summary>
              <div className="credential-body">
                <p>서울과학기술대학교 / 인공지능응용학과</p>
                <p className="credential-note">2023 ~ 재학</p>
              </div>
            </details>
            <details className="credential-card">
              <summary>
                <span className="credential-title">자격증</span>
                <span className="credential-meta">자격명 · 세부 자격</span>
              </summary>
              <div className="credential-body">
                <ul className="credential-items">
                  <li>운전면허 1종보통</li>
                  <li>컴퓨터활용능력 2급</li>
                  <li>ITQ OA MASTER: 아래한글, 한글엑셀, 인터넷</li>
                  <li>워드프로세서</li>
                  <li>정보처리 기능사, 산업기사(필기)</li>
                  <li>비서 1급</li>
                  <li>육상무선통신사</li>
                  <li>회계관리 1급, 2급</li>
                  <li>데이터 분석 준전문가(ADsP)</li>
                  <li>SQL 개발자(SQLD)</li>
                  <li>SMAT 3급(실무자)</li>
                  <li>초경량비행장치 조종자 4종(무인멀티콥터)</li>
                  <li>Microsoft Certified: Azure AI Fundamentals(AI-900), Azure Fundamentals(AZ-900)</li>
                  <li>전산회계 1급 결과 대기 (제124회, 2026.02.26 발표)</li>
                </ul>
              </div>
            </details>
            <details className="credential-card">
              <summary>
                <span className="credential-title">시험 · 어학</span>
                <span className="credential-meta">점수 · 유효기간</span>
              </summary>
              <div className="credential-body">
                <ul className="credential-items">
                  <li>TOEIC 870 (LC 455, RC 415) · 2023.06.25 ~ 2025.06.25</li>
                  <li>TESAT S급 · 2024.10.26 ~ 2026.10.25</li>
                  <li>매경TEST 우수 · 2024.12.06 ~ 2026.12.05</li>
                </ul>
              </div>
            </details>
            <details className="credential-card">
              <summary>
                <span className="credential-title">교육 이수</span>
                <span className="credential-meta">과정명 · 기관</span>
              </summary>
              <div className="credential-body">
                <ul className="credential-items">
                  <li>K-MOOC 디지털 스토리텔링과 게임 이수</li>
                  <li>손생님! 한국수어를 부탁해요-입문(한국수어 기초어휘) 수강중</li>
                  <li>서울과학기술대학교 25-3차 학습법 특강: 협업최강 UXUI 툴 피그마 개념 잡고 실전까지 완전 정복 수강</li>
                </ul>
              </div>
            </details>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <h2>Projects</h2>
            <p>진행 중인 작업과 최근 실험들을 정리했습니다.</p>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <h3>Reading Log</h3>
              <p>
                읽은 책의 핵심 문장과 생각을 모아두는 기록 프로젝트. 긴 글과
                짧은 리뷰를 병행합니다.
              </p>
              <div className="tags">
                <span>Archive</span>
                <span>Content</span>
              </div>
            </article>
            <article className="project-card">
              <h3>Mini Web Labs</h3>
              <p>
                UI 실험과 작은 웹 앱을 테스트하는 공간. 아이디어를 빠르게
                형태로 옮기는 연습을 합니다.
              </p>
              <div className="tags">
                <span>Frontend</span>
                <span>Prototype</span>
              </div>
            </article>
            <article className="project-card">
              <h3>Personal SNS Hub</h3>
              <p>
                여러 플랫폼에 흩어진 기록을 한 페이지에서 연결. 검색과 탐색이
                쉬운 구조를 실험합니다.
              </p>
              <div className="tags">
                <span>Community</span>
                <span>Design</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="sns">
          <div className="section-header">
            <h2>SNS</h2>
            <p>이미 연결된 채널로 바로 이동할 수 있습니다.</p>
          </div>
          <div className="sns-grid">
            <a
              className="sns-card"
              href="https://doseobujang.tistory.com"
              target="_blank"
              title="tistory"
              rel="noreferrer"
            >
              <img src={tistoryLogo} alt="Tistory" />
              <div>
                <h3>Tistory</h3>
                <p>긴 글과 기록</p>
              </div>
              <span className="arrow">→</span>
            </a>
            <a
              className="sns-card"
              href="https://www.instagram.com/doseobujang_official"
              target="_blank"
              title="instagram"
              rel="noreferrer"
            >
              <img src={instagramLogo} alt="Instagram" />
              <div>
                <h3>Instagram</h3>
                <p>사진과 순간들</p>
              </div>
              <span className="arrow">→</span>
            </a>
            <a
              className="sns-card"
              href="https://github.com/doseobujang"
              target="_blank"
              title="github"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="GitHub" />
              <div>
                <h3>GitHub</h3>
                <p>코드와 작업물</p>
              </div>
              <span className="arrow">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <h2>Contact</h2>
          <p>협업이나 간단한 인사, 언제든 환영합니다.</p>
        </div>
        <div className="footer-links">
          <a href="https://doseobujang.tistory.com" target="_blank" rel="noreferrer">
            Tistory
          </a>
          <a href="https://www.instagram.com/doseobujang_official" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://github.com/doseobujang" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

function PoemPage() {
  return (
    <div className="page poem-page">
      <header className="hero poem-hero">
        <nav className="nav">
          <Link className="brand" to="/">
            doseobujang
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/tistory">Tistory</Link>
            <Link to="/culture">Culture</Link>
            <Link to="/poems#poems">Poems</Link>
          </div>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Short Poems</p>
            <h1>짧은 글을 모아두는 페이지</h1>
            <p className="subtitle">
              긴 글보다 짧은 문장이 어울리는 날을 위해 준비한 공간입니다. 감정의
              결을 간단히 남겨두고 필요할 때 다시 꺼내봅니다.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/poems#poems">
                시 모음 보기
              </Link>
              <Link className="btn ghost" to="/poems#notes">
                짧은 문장
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="card-title">Format</p>
              <p className="card-text">
                4~8줄 정도의 짧은 시를 저장할 수 있도록 구성했습니다. 부담 없이
                쓰고 가볍게 남기는 것이 목적입니다.
              </p>
              <div className="pill-row">
                <span className="pill">4-8 Lines</span>
                <span className="pill">Mood</span>
                <span className="pill">Minimal</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="poems">
          <div className="section-header">
            <h2>Poems</h2>
            <p>짧은 시를 깔끔하게 모아두는 곳.</p>
          </div>
          <div className="poem-grid">
            <article className="poem-card">
              <h3>후회</h3>
              <p className="poem-body">{`너의 안경에 떨어진
너를 불편하게만 하는
나는 작은 빗방울

네게 아무리 떨어져보아도
나는
작디 작은 방울이었다.

우산을 쓴 너에게
떨어지고 싶어 나는
바람을 타고 날았다

떨어진 곳에서 나는
네게 해가 될까
다시 바람에 올랐다

나는 지나가는 비였다.
폭우처럼 쏟아지고 싶지만
그런 용기조차 없는`}</p>
              <p className="poem-tag">2022년 장유고등학교 문예창작대회 장려(3위)</p>
              <p className="poem-meta">2022</p>
            </article>
            <article className="poem-card">
              <h3>제목</h3>
              <p className="poem-body">{`짧게
남겨두는
오늘의 마음
그게 전부`}</p>
              <p className="poem-tag">오늘의 감정</p>
              <p className="poem-meta">2026.02</p>
            </article>
            <article className="poem-card">
              <h3>제목</h3>
              <p className="poem-body">{`비가 오고
창문이 흐려져
말이 줄어든다
대신 글이 남는다`}</p>
              <p className="poem-tag">비, 흐림</p>
              <p className="poem-meta">2026.02</p>
            </article>
          </div>
        </section>

        <section className="section" id="notes">
          <div className="section-header">
            <h2>Short Notes</h2>
            <p>한두 문장으로 남기는 감정 기록.</p>
          </div>
          <div className="poem-notes">
            <p>오늘의 마음을 한 줄로 적는다.</p>
            <p>짧게 쓰는 글이 생각을 또렷하게 만든다.</p>
            <p>길게 쓰지 않아도 감정은 충분히 남는다.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h2>Poem Page</h2>
          <p>짧은 글은 쉽게 잊히지 않는다.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home으로 돌아가기</Link>
        </div>
      </footer>
    </div>
  )
}

function CulturePage() {
  useHashScroll()

  return (
    <div className="page culture-page">
      <header className="hero culture-hero">
        <nav className="nav">
          <Link className="brand" to="/">
            doseobujang
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/culture#movies">Movies</Link>
            <Link to="/culture#dramas">Drama</Link>
            <Link to="/culture#music">Music</Link>
            <Link to="/culture#books">Books</Link>
            <Link to="/culture#artists">Artists</Link>
          </div>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Culture Archive</p>
            <h1>내 문화생활 기록</h1>
            <p className="subtitle">
              영화, 드라마, 음악, 책, 그리고 좋아하는 아티스트까지. 내 취향을
              조용히 정리하는 공간입니다.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/culture#movies">
                컬렉션 보기
              </Link>
              <Link className="btn ghost" to="/culture#artists">
                아티스트 보기
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="card-title">Focus</p>
              <p className="card-text">
                장르별로 분류하고, 짧은 감상으로 기록합니다. 나중에 다시 꺼내보기
                쉽도록 정리하는 중입니다.
              </p>
              <div className="pill-row">
                <span className="pill">Movies</span>
                <span className="pill">Music</span>
                <span className="pill">Books</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="movies">
          <div className="section-header">
            <h2>Movies</h2>
            <p>최근에 인상 깊었던 영화와 다시 보고 싶은 작품.</p>
          </div>
          <div className="culture-grid">
            <article className="media-card">
              <h3>영화 제목</h3>
              <p>감상 한 줄 · 감독/장르</p>
              <span className="media-tag">Rewatch</span>
            </article>
            <article className="media-card">
              <h3>영화 제목</h3>
              <p>감상 한 줄 · 감독/장르</p>
              <span className="media-tag">Mood</span>
            </article>
          </div>
        </section>

        <section className="section" id="dramas">
          <div className="section-header">
            <h2>Drama</h2>
            <p>몰입해서 봤던 드라마와 추천작.</p>
          </div>
          <div className="culture-grid">
            <article className="media-card">
              <h3>드라마 제목</h3>
              <p>감상 한 줄 · 방송사/장르</p>
              <span className="media-tag">Favorite</span>
            </article>
            <article className="media-card">
              <h3>드라마 제목</h3>
              <p>감상 한 줄 · 방송사/장르</p>
              <span className="media-tag">Ongoing</span>
            </article>
          </div>
        </section>

        <section className="section" id="music">
          <div className="section-header">
            <h2>Music</h2>
            <p>자주 듣는 곡과 그때의 기분.</p>
          </div>
          <div className="culture-grid">
            <article className="media-card">
              <h3>곡/앨범 제목</h3>
              <p>아티스트 · 장르 · 한 줄 감상</p>
              <span className="media-tag">Playlist</span>
            </article>
            <article className="media-card">
              <h3>곡/앨범 제목</h3>
              <p>아티스트 · 장르 · 한 줄 감상</p>
              <span className="media-tag">Loop</span>
            </article>
          </div>
        </section>

        <section className="section" id="books">
          <div className="section-header">
            <h2>Books</h2>
            <p>책장에 남겨두고 싶은 문장들.</p>
          </div>
          <div className="culture-grid">
            <article className="media-card">
              <h3>책 제목</h3>
              <p>저자 · 키워드 · 한 줄 감상</p>
              <span className="media-tag">Highlight</span>
            </article>
            <article className="media-card">
              <h3>책 제목</h3>
              <p>저자 · 키워드 · 한 줄 감상</p>
              <span className="media-tag">Notebook</span>
            </article>
          </div>
        </section>

        <section className="section" id="artists">
          <div className="section-header">
            <h2>Favorite Artists</h2>
            <p>좋아하는 아티스트를 공개하고, 한 줄 코멘트로 취향을 기록해요.</p>
          </div>
          <div className="culture-grid">
            <article className="media-card">
              <h3>아티스트 이름</h3>
              <p>대표 곡/앨범 · 장르</p>
              <span className="media-tag">Mood</span>
            </article>
            <article className="media-card">
              <h3>아티스트 이름</h3>
              <p>대표 곡/앨범 · 장르</p>
              <span className="media-tag">All-time</span>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h2>Culture Page</h2>
          <p>기록은 이어집니다. 필요한 만큼만 꺼내 보여주세요.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home으로 돌아가기</Link>
        </div>
      </footer>
    </div>
  )
}

function TistoryPage() {
  useHashScroll()
  const [state, setState] = useState({ loading: true, error: '', items: [] })

  useEffect(() => {
    let active = true

    async function load() {
      try {
        const res = await fetch(`/.netlify/functions/tistory?rss=${encodeURIComponent(TISTORY_RSS_URL)}`)
        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
          throw new Error(data.error || 'Failed to load feed')
        }
        if (!active) return
        setState({ loading: false, error: '', items: data.items || [] })
      } catch (err) {
        if (!active) return
        setState({
          loading: false,
          error: err?.message || '티스토리 글을 불러오지 못했어요.',
          items: [],
        })
      }
    }

    load()
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="page tistory-page">
      <header className="hero tistory-hero">
        <nav className="nav">
          <Link className="brand" to="/">
            doseobujang
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/culture">Culture</Link>
            <Link to="/poems">Poems</Link>
            <Link to="/tistory#posts">Posts</Link>
          </div>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Tistory</p>
            <h1>티스토리 기록 모음</h1>
            <p className="subtitle">
              티스토리에 쌓인 글을 이 페이지에서 바로 확인할 수 있습니다. 최신 글부터
              빠르게 탐색해 보세요.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/tistory#posts">
                글 목록 보기
              </Link>
              <a className="btn ghost" href={TISTORY_RSS_URL} target="_blank" rel="noreferrer">
                RSS 보기
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="card-title">Source</p>
              <p className="card-text">
                별도의 블로그 기능 없이도 티스토리 글을 끌어와 보여줍니다. 필요하면
                이후에 댓글이나 검색 기능을 추가할 수 있어요.
              </p>
              <div className="pill-row">
                <span className="pill">RSS</span>
                <span className="pill">Curated</span>
                <span className="pill">Fast</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="posts">
          <div className="section-header">
            <h2>Posts</h2>
            <p>티스토리에서 최근에 작성한 글을 가져옵니다.</p>
          </div>
          {state.loading && <p className="tistory-status">불러오는 중...</p>}
          {state.error && (
            <div className="tistory-error">
              <p>{state.error}</p>
              <a href="https://doseobujang.tistory.com" target="_blank" rel="noreferrer">
                티스토리에서 확인하기 →
              </a>
            </div>
          )}
          {!state.loading && !state.error && (
            <div className="post-grid">
              {state.items.map((item) => (
                <article className="post-row" key={item.link}>
                  <div className="post-row-main">
                    <p className="post-date">{item.pubDate}</p>
                    <h3>{item.title}</h3>
                    <p className="post-excerpt">{item.description}</p>
                  </div>
                  <a className="post-link" href={item.link} target="_blank" rel="noreferrer">
                    티스토리에서 읽기 →
                  </a>
                </article>
              ))}
            </div>
          )}
          <div className="tistory-more">
            <a href="https://doseobujang.tistory.com" target="_blank" rel="noreferrer">
              글 더 보기 →
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h2>Tistory</h2>
          <p>모든 글은 티스토리에 저장됩니다.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home으로 돌아가기</Link>
        </div>
      </footer>
    </div>
  )
}

export default App
