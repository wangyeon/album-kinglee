import { useEffect, useState } from 'react'
import axios from 'axios'
import CommonHeader from '../../components/common/header/CommonHeader'
import styles from './styles/index.module.scss'
import CommonSearchBar from '../../components/common/searchBar/CommonSearchBar'
import CommonNav from '../../components/common/navigation/CommonNav'
import CommonFooter from '../../components/common/footer/CommonFooter'
import Card from './components/Card'

function MainPage() {
    const [imgUrls, setImgUrls] = useState<string[]>([])

    const getData = async () => {
        // 데이터 가져오는 로직
        const API_URL = 'https://api.unsplash.com/search/photos'
        const ACCESS_KEY = 'WAifS-M-6-ZitJJokc7ACHyZYswi47-pWJrCfJkyPnk'
        const PER_PAGE = 30

        const searchValue = 'office';
        const pageValue = 1;

        try {

            const res = await axios.get(`${API_URL}?query=${searchValue}&per_page=${PER_PAGE}&client_id=${ACCESS_KEY}&page=${pageValue}`)
            console.log(res.data)
            if (res.status === 200) {
                setImgUrls(res.data.results)
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const cardList = imgUrls.map((card: any) => {
        return <Card key={card.id} data={card} />
    })

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.page}>
            {/* 공통 헤더 UI 부분 */}
            <CommonHeader />
            <CommonNav />
            {/* 공통 네비게이션 UI 부분 */}
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>PhotoSplash</span>
                        <span className={styles.wrapper__desc}>
                            인터넷의 시각 자료 출처입니다. <br />
                            모든 지역에 있는 크리에이터들의 지원을 받습니다.
                        </span>
                        {/* 검색창 UI 부분 */}
                        <CommonSearchBar />

                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                    {cardList}
                </div>
            </div>
            {/* 공통 푸터 UI 부분 */}
            <CommonFooter />
        </div>
    )
}

export default MainPage
