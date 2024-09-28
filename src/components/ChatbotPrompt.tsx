import styles from '../components/ChatbotPrompt.module.scss'
import promptArrow from '../assets/promptArrow.svg';
import { useState } from 'react';

interface ChatbotPromptProps {
    onQuery? : Function
}

export default function ChatbotPrompt({onQuery} : ChatbotPromptProps) {
    const [query, setQuery] = useState('');

    const handleQuery = () => {
        onQuery!(query)
    }

    return (
        <div className={styles['chat-prompt']}>
            <img alt='전송버튼' onClick={handleQuery} src={promptArrow}></img>
            <input className={styles['prompt-input-field']} placeholder='프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?' type="text" onChange={(e) => setQuery(e.target.value)} value={query}></input>
        </div>
    )
}
