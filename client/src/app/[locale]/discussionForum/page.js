import { DiscussionPage } from "./components/discussionPage"

export const metadata = {
    title: 'Discussion Forum | I.M.S.',
  }
  export default function InternshipPositions() {
  
    return (
      <main className={"bg-white dark:bg-dark_2 min-h-full"}>
          <div className={''}>
            <DiscussionPage />
          </div>
      </main>
    )
  }