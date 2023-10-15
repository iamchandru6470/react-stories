
type PillProps = {
    showProgress: boolean
    isComplete: boolean
}

const Pill = ({ showProgress = false, isComplete = false }: PillProps) => {
    let progresProps = {}
    if (showProgress) {
        progresProps = { className: 'progress' }
    } else if (isComplete) {
        progresProps = { className: 'complete' }
    }

    return (<div className="pill">
        <div {...progresProps} />
    </div>)
}

export default Pill