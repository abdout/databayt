// Team.tsx
import LgIcon from '@/component/atom/icon/lg';
import React from 'react';

interface TeamMember {
  image: string;
  lead: boolean;
}

interface TeamProps {
  members: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <div className='flex flex-col gap-4'>
        <h3>Team</h3>
    <div className="flex space-x-6">
      {members.map((member, index) => (
        <div key={index} className="relative rounded-full border">
          <LgIcon src={member.image} alt="Team Member" />
          {member.lead && (
            <div className="absolute bottom-0 right-0 bg-yellow-400 rounded-full w-8 h-8 p-1 flex items-center justify-center text-xs font-semibold ">
              TL
            </div>
          )}
        </div>
      ))}
    </div>

    </div>
    
  );
};

export default Team;