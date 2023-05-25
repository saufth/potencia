// Types
import type { Metadata } from 'next'

/** The history page head metadata configuration */
export const metadata: Metadata = {
  title: 'Historia'
}

/** The home page of the application */
export default function HistoryPage () {
  return (
    <main>
      <section>
        <header>
          <h2>Nuestra historia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odit cum obcaecati mollitia aliquam dicta blanditiis laborum. Ratione accusamus sunt ipsa alias quam sed veniam itaque, exercitationem tempore aperiam error?
          </p>
        </header>
      </section>
    </main>
  )
}
