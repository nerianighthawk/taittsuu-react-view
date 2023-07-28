import React, { useEffect, useState } from 'react';
import './taittsuu.css';
import axios from 'axios';
import dayjs from 'dayjs';

type Taiitsu = {
  id: number,
  user_id: number,
  content: string,
  post_type: number,
  is_defensive: number,
  is_sensitive: number,
  scope: number,
  exist_media: number,
  exist_url: number,
  exist_hashtag: number,
  target_rt_post_id: number | null,
  created_at: string,
  user_name: string,
  user_screenname: string,
  is_verified: number,
  is_locked: number,
  is_rt: boolean,
  is_deleted: boolean,
  like_count: number,
  rt_count: number,
  is_liked: boolean,
  is_retaiitsued: boolean,
  is_ignored: boolean
};

type TaiitsusResponse = {
  data: Taiitsu[]
}

const convertToDisplayDate = (datetime: string) => (
  dayjs(datetime).format('YYYY/M/D h:mm:ss')
);

/**
 * Primary UI component for user interaction
 */
export const Taittsuu = () => {
  const [taiitsus, setTaiitsus] = useState<Taiitsu[]>([])
  useEffect(() => {
    (async () => {
      const res = await axios.get<TaiitsusResponse>('/taittsuu/api/users/yataka_neria/taiitsus')
      setTaiitsus(res.data.data)
    })()
  }, [])

  const generateHTML = (taiitsu: Taiitsu) => (
    <div className="post-wrap" id="24gq782igvg">
        <div className="post-main">
            <a className="post-link post-link-user" href="/users/che_to_n">
                <div className="post-user-name">
                    <span className="post-user-name-value">{ taiitsu.user_name }</span>
                    <span className="post-user-badge"><i className="fas fa-check-circle"></i></span>
                    <span className="post-user-locked" style={{display: taiitsu.is_locked ? "block" : "none"}}><i className="fas fa-lock"></i></span>
                </div>
            </a>
            <div className="post-infos">
                <a className="post-link post-link-user" href="/users/che_to_n">
                    <span className="post-user-tid">@{ taiitsu.user_screenname }</span>
                </a>
                ・
                <a className="post-link post-link-post" href="/users/che_to_n/status/1635144">
                    <span className="post-time">{ convertToDisplayDate(taiitsu.created_at) }</span>
                </a>
            </div>
            <a className="post-link post-link-post" href="/users/che_to_n/status/1635144">
                <div className="post-rt-source-wrap" style={{display: taiitsu.is_rt ? "block" : "none"}}>
                    <span className="post-rt-source">RTされたタイーツ</span>
                </div>
                <div className="post-content">{ taiitsu.content }</div>
            </a>
        </div>
        <a className="post-link-user" href="/users/che_to_n" target="_blank">
            <img className="post-image" src="https://taittsuu.com/image/sozai/taitsu.png"/>
        </a>
    </div>
  );
  
  return (<>{taiitsus.map(generateHTML)}</>);
};
