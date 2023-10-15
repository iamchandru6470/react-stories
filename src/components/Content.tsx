
type ContentProps = {
    showContent: boolean
    content: any // create your own customized content type
    contentProps: any
    handleNext: () => void
    handleBack: () => void
}

const Content = ({
    showContent,
    content,
    contentProps = {},
    handleNext,
    handleBack }: ContentProps) => {
    return showContent && <div {...contentProps}>
        <div style={{ position: 'relative' }}>
            {content}
            <span id="previous" className="previous" onClick={handleBack} />
            <span id="next" className="next" onClick={handleNext} />
        </div>
    </div >
}

export default Content