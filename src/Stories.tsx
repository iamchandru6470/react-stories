import { useEffect, useState } from "react"
import Pill from "./components/Pill"
import Content from "./components/Content"

const Stories = ({ stories }: { stories: any[] }) => {
    const count = stories.length
    const [showProgressIndex, setProgressIndex] = useState(0)

    /* Handler for next story */
    const handleNext = () => {
        if (showProgressIndex >= count) {
            return
        }
        setProgressIndex(showProgressIndex + 1)
    }

    /* Handler for moving to previous story */
    const handleBack = () => {
        if (showProgressIndex <= 0) {
            return
        }
        setProgressIndex(showProgressIndex - 1)
    }

    useEffect(() => {
        if (showProgressIndex >= count - 1) {
            return
        }
        let timeout = setTimeout(() => {
            setProgressIndex(showProgressIndex + 1)
        }, 5000)
        return () => {
            clearTimeout(timeout)
        }
    }, [showProgressIndex])

    /* Reached end of the story, showing end page */
    if (showProgressIndex === count) {
        return (<div className="end">
            <div>🙏</div>
            <div>Thank You</div>
        </div>)
    }

    return <div className="wrapper">
        <div className="loading-pill-container">
            {stories.map((_, idx) =>
                (<Pill key={idx} isComplete={idx < showProgressIndex} showProgress={idx === showProgressIndex} />)
            )}
        </div>
        <section className="story-section">
            {stories.map(({ content, props }, idx) => {
                /* Customize the content component as per your needs */
                return <Content
                    showContent={idx === showProgressIndex}
                    content={content} contentProps={props}
                    handleNext={handleNext}
                    handleBack={handleBack}
                />
            })}
        </section>
    </div>

}

export default Stories