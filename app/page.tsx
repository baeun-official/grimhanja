import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="#" className="font-['Pacifico'] text-primary text-2xl mr-10">logo</Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/courses" className="text-gray-900 font-medium hover:text-primary">강의</Link>
              <Link href="#" className="text-gray-900 font-medium hover:text-primary">시험</Link>
              <Link href="#" className="text-gray-900 font-medium hover:text-primary">교재 Shop</Link>
              <Link href="#" className="text-gray-900 font-medium hover:text-primary">이벤트</Link>
              <Link href="#" className="text-gray-900 font-medium hover:text-primary">마이페이지</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">로그인</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">회원가입</Link>
            <Link href="#" className="bg-primary text-white px-4 py-2 rounded-button whitespace-nowrap font-medium hover:bg-opacity-90 transition-colors">구독 시작하기</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-bg w-full">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="w-full flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">한자 마스터로 <br />실력을 키우세요</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">광고 없이 무제한으로 한자 강의를 시청하고<br />시험 대비부터 취업까지 한자 실력을 완성하세요.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#" className="bg-primary text-white px-6 py-3 rounded-button whitespace-nowrap font-medium hover:bg-opacity-90 transition-colors text-center">7일 무료 체험 시작하기</Link>
                <Link href="#" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-button whitespace-nowrap font-medium hover:bg-gray-50 transition-colors text-center">무료 강의 둘러보기</Link>
              </div>
              <p className="text-gray-600 flex items-center">
                <span className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-user-line text-primary" />
                </span>
                현재 <span className="font-bold text-primary mx-1">25,480명</span>의 학생들이 함께 공부하고 있어요
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-lg relative rounded-lg overflow-hidden shadow-xl">
                <video className="w-full" autoPlay loop muted>
                  <source src="#" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-90 cursor-pointer">
                    <i className="ri-play-fill text-primary text-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">인기 한자 강의</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">입문부터 고급까지, 목표에 맞는 한자 강의를 선택하세요. 전문 강사진의 체계적인 커리큘럼으로 한자 실력을 향상시킬 수 있습니다.</p>
          </div>
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-100 rounded-full">
              <button className="px-6 py-2 rounded-full bg-primary text-white font-medium whitespace-nowrap">입문</button>
              <button className="px-6 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-200 whitespace-nowrap">초급</button>
              <button className="px-6 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-200 whitespace-nowrap">중급</button>
              <button className="px-6 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-200 whitespace-nowrap">고급</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="video-container">
                <img src="https://readdy.ai/api/search-image?query=Korean%20student%20learning%20Chinese%20characters%20in%20a%20bright%20modern%20classroom%2C%20focused%20on%20basic%20strokes%20and%20radicals%2C%20clean%20organized%20desk%20with%20practice%20sheets%2C%20digital%20screen%20showing%20character%20examples%2C%20soft%20natural%20lighting%2C%20educational%20environment&width=600&height=340&seq=2&orientation=landscape" alt="한자 입문 강의" className="w-full h-48 object-cover object-top" />
                <div className="video-tag">입문</div>
                <div className="video-duration">32분</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">한자 기초 필수 부수 100자</h3>
                <p className="text-gray-600 mb-2 text-sm">김민수 강사</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-star-fill text-yellow-400" />
                    </div>
                    <span className="text-sm text-gray-700">4.8</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-user-line text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-700">2,345명</span>
                  </div>
                </div>
                <Link href="#" className="block w-full bg-primary text-white text-center py-2 rounded-button whitespace-nowrap font-medium hover:bg-opacity-90 transition-colors">무료 수강하기</Link>
              </div>
            </div>
            {/* Course 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="video-container">
                <img src="https://readdy.ai/api/search-image?query=Korean%20student%20practicing%20Chinese%20character%20writing%20with%20brush%20pen%2C%20traditional%20calligraphy%20paper%2C%20ink%20stone%2C%20focused%20expression%2C%20organized%20desk%20with%20reference%20books%2C%20soft%20natural%20lighting%2C%20educational%20environment&width=600&height=340&seq=3&orientation=landscape" alt="한자 초급 강의" className="w-full h-48 object-cover object-top" />
                <div className="video-tag">초급</div>
                <div className="video-duration">45분</div>
                <div className="ad-badge">광고</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">생활 속 자주 쓰이는 한자 200자</h3>
                <p className="text-gray-600 mb-2 text-sm">박지원 강사</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-star-fill text-yellow-400" />
                    </div>
                    <span className="text-sm text-gray-700">4.7</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-user-line text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-700">1,876명</span>
                  </div>
                </div>
                <Link href="#" className="block w-full bg-primary text-white text-center py-2 rounded-button whitespace-nowrap font-medium hover:bg-opacity-90 transition-colors">구독하고 보기</Link>
              </div>
            </div>
            {/* Course 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="video-container">
                <img src="https://readdy.ai/api/search-image?query=Korean%20student%20studying%20advanced%20Chinese%20characters%20with%20digital%20tablet%20and%20traditional%20books%2C%20making%20notes%2C%20concentrated%20expression%2C%20clean%20organized%20desk%2C%20bright%20modern%20study%20space%2C%20educational%20environment&width=600&height=340&seq=4&orientation=landscape" alt="한자 중급 강의" className="w-full h-48 object-cover object-top" />
                <div className="video-tag">중급</div>
                <div className="video-duration">60분</div>
                <div className="ad-badge">광고</div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">한자능력검정시험 3급 완벽 대비</h3>
                <p className="text-gray-600 mb-2 text-sm">이수진 강사</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-star-fill text-yellow-400" />
                    </div>
                    <span className="text-sm text-gray-700">4.9</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-1">
                      <i className="ri-user-line text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-700">3,210명</span>
                  </div>
                </div>
                <Link href="#" className="block w-full bg-primary text-white text-center py-2 rounded-button whitespace-nowrap font-medium hover:bg-opacity-90 transition-colors">구독하고 보기</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="#" className="inline-flex items-center text-primary font-medium hover:underline">
              더 많은 강의 보기
              <div className="w-5 h-5 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-line" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
