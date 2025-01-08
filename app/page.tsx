"use client"
import { useChat } from "ai/react"
import { Message } from "ai"
// import Bubble from "./components/Bubble"
import LoadingBubble from "./components/LoadingBubble"
// import PrompSugestionRow from "./components/PromptSuggestionsRow"

const Home = () => {

    const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = false

    return (
        <main>
            <h1>yayayayyayaa</h1>
            <section className={noMessages ? "" : "populated"}>
                {noMessages? (
                    <>
                        <p className="starter-text">
                            HELLO
                        </p>
                        <br />
                        {/* <PrompSugestionRow/> */}
                    </>
                ) : (
                    <>
                        {/* {messages.map((message, index) => <Bubble key={`message-${index}`} message={message}/>)} */}
                        {isLoading && <LoadingBubble/>}
                    </>
                )}
                <form onSubmit={handleSubmit}>
                    <input className="question-box" onChange={handleInputChange} value={input} placeholder="Tanya dong"/>
                    <input type="submit"/>
                </form>
            </section>
        </main>
    )
}

export default Home