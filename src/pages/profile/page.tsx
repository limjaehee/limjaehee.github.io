import React from 'react'
import * as S from 'pages/profile/page.style'
import Layout from 'features/layout/Layout'
import profile from 'assets/images/content/profile.jpg'
import Tag from 'components/label/Tag'
import { GithubIcon, NotionIcon } from 'assets/icons/icon'

const NOTION_SITE =
  'https://jaeheelim.notion.site/c52e467b438647ef997abe714268f70e?pvs=4'
const GITHUB_SITE = 'https://github.com/limjaehee'

function Page() {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'SCSS',
    'Chart.js',
    'Git',
    'Figma',
  ]

  const openPage = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <Layout>
      <S.Layout>
        <S.ProfilePicture>
          <img src={profile} alt="profile" />
        </S.ProfilePicture>
        <S.ProfileBox>
          <S.ProfileIconQuotesStart />
          <S.ProfileIconQuotesEnd />
          <S.ProfileTitle $isAnimation>
            안녕하세요 :) <br /> <strong>꾸준히 새로운 기술을 학습</strong>하는
            <br />
            4년차 프론트엔드 개발자입니다.
          </S.ProfileTitle>
          <S.ProfileComment $isAnimation>
            <strong>지속적인 학습과 공유를 통해 성장</strong>하는 개발자로,
            <br className="is-desktop" />
            현재는 React와 TypeScript를 실무에 적용하며
            <br className="is-mobile" /> 역량을 확장하고 있습니다.
            <br className="is-desktop is-mobile" />
            퍼블리셔 시절부터 SCSS, Vue.js 등을
            <br className="is-mobile" />
            학습하고 정리해왔으며,
            <br className="is-desktop" />
            <strong>
              사내 스터디를 통해 팀원들과 <br className="is-mobile" />
              지식을 나누는 데 힘써왔습니다.
            </strong>
          </S.ProfileComment>
        </S.ProfileBox>
        <S.ProfileBox>
          <S.ProfileTitle $isAnimation={false}>
            저는 이렇게 <strong>공부</strong>합니다
          </S.ProfileTitle>
          <S.ProfileComment $isAnimation={false}>
            꾸준한 공부를 위해 <strong>노션에 지식을 기록</strong>하고
            <br className="is-desktop is-mobile" />
            깃허브에 코드 소스를 정리해놓고 있습니다.
            <br className="is-desktop is-mobile" />
            해당 버튼을 클릭하시면 사이트로 이동합니다.
          </S.ProfileComment>
          <S.ProfileStudy>
            <S.ProfileStudyBtn onClick={() => openPage(NOTION_SITE)}>
              <NotionIcon />
            </S.ProfileStudyBtn>
            <S.ProfileStudyBtn onClick={() => openPage(GITHUB_SITE)}>
              <GithubIcon />
            </S.ProfileStudyBtn>
          </S.ProfileStudy>
        </S.ProfileBox>
        <S.ProfileBox>
          <S.ProfileTitle $isAnimation={false}>
            <strong>언어</strong>와 <strong>스킬</strong>을 배우는 것을 좋아해요
          </S.ProfileTitle>
          <S.ProfileSkill>
            {skills.map(skill => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </S.ProfileSkill>
        </S.ProfileBox>
        <S.ProfileBox>
          <S.ProfileTitle $isAnimation={false}>
            또한, 이런 <strong>활동</strong>을 했어요
          </S.ProfileTitle>
          <S.ProfileCareer>
            <S.ProfileCareerItem>
              <p>
                <em>이젠아카데미(모바일 웹 & 앱디자인)</em>
              </p>
              <span>2020.05.15~2020.10.06</span>
            </S.ProfileCareerItem>
          </S.ProfileCareer>
        </S.ProfileBox>
        <S.ProfileBox>
          <S.ProfileTitle $isAnimation={false}>
            마지막으로 제 <strong>커리어</strong>입니다 :)
          </S.ProfileTitle>
          <S.ProfileCareer>
            <S.ProfileCareerItem>
              <p>
                <em>로봇앤컴</em> <em>프론트엔드</em>
              </p>
              <span>2023.11.01~2025.01.31</span>
            </S.ProfileCareerItem>
            <S.ProfileCareerItem>
              <p>
                <em>용감한컴퍼니</em> <em>프론트엔드</em>
              </p>
              <span>2022.02.01~2023.03.31</span>
            </S.ProfileCareerItem>
            <S.ProfileCareerItem>
              <p>
                <em>더조인</em> <em>퍼블리셔</em>
              </p>
              <span>2020.11.02~2021.11.30</span>
            </S.ProfileCareerItem>
          </S.ProfileCareer>
        </S.ProfileBox>
      </S.Layout>
    </Layout>
  )
}

export default Page
