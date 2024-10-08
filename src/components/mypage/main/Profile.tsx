'use client';

import { useState } from 'react';
import Image from 'next/image';

import { User } from '@/types/auth.type';

import { DEFAULT_PROFILE, profileLoader } from './modal/user-update/Profile';

type ProfileProps = Pick<User, 'nickname' | 'profileImg'> & {
  level?: number;
};

const Profile = ({ profileImg, level = 1, nickname }: ProfileProps) => {
  const [imgSrc, setImgSrc] = useState(true);

  return (
    <div className="flex gap-[14px] items-center">
      <div className="thumnail w-[46px] h-[46px] relative">
        <Image
          className="object-contain"
          loader={profileLoader}
          src={imgSrc ? profileImg || DEFAULT_PROFILE : DEFAULT_PROFILE}
          alt="profile"
          fill
          onError={() => setImgSrc(false)}
        />
      </div>
      <div className="info font-bold">
        <div className="text-primary">Lv.{level}</div>
        <div className="flex gap-[4px]">
          <span className="text-[22px] leading-[28px] flex items-end">
            {nickname}
          </span>
          <span className="text-[16px] leading-[22px] text-gray-600 flex items-end">
            님의 에너지
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
