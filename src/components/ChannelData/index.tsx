import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);
    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Ismael Queiroz"
                        date="22/07/2020"
                        content="Hoje to sem task"
                    />
                ))}

                <ChannelMessage
                    author="Working Bot"
                    date="22/07/2020"
                    content={
                        <>
                            Quem liga? Vá trabalhar <Mention>@Ismael Queiroz</Mention>!
                        </>
                    }
                    hasMentions
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;