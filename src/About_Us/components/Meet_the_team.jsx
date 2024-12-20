import SharedContainer from '../../shared/SharedContainer'
import React from 'react'
import ContentWithHeadingAndSubheading from '../../shared/SharedContainer/ContentWithHeadingAndSubheading'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Teams from '../../Data/About/Meet_The_Team'
export default function MeetTheTeam() {
  return (
    <div className="bg-[#EFF5F6] mb-32">
      <SharedContainer variant="default">
        <ContentWithHeadingAndSubheading
          className="flex items-center justify-center flex-col"
          heading="Meet the Team"
          paragraph="Meet Our Team Of Professionals"
        />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-12">
          {Teams.map((team, index) => (
            <Card className="flex  flex-col items-center rounded-t-xl" key={index}>
              <img src={team.image} alt="doctors thumbnail" className="rounded-t-xl" />
              <CardHeader className="flex items-center justify-center">
                <CardTitle className="text-[20px] font-semibold leading-[26px] text-[#434343]">
                  {team.name}
                </CardTitle>
                <CardDescription>{team.specialist}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </SharedContainer>
    </div>
  )
}
