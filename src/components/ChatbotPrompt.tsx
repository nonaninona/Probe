import styles from '../components/ChatbotPrompt.module.scss'
import { useState } from 'react';

interface ChatbotPromptProps {
    onQuery?: Function
}

export default function ChatbotPrompt({ onQuery }: ChatbotPromptProps) {
    const [query, setQuery] = useState('');
    var isDisable = query == '';
    
    const handleQuery = () => {
        onQuery!(query)
    }

    const handleChange = (value: string) => {
        setQuery(value)
        if (query == '')
            isDisable = true
        else
            isDisable = false
    }

    return (
        <div className={styles['chat-prompt']}>
            <button className={styles['query-button']} disabled={isDisable} onClick={handleQuery} />
            <input
                className={styles['prompt-input-field']}
                placeholder='프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?'
                type="text"
                onChange={(e) => handleChange(e.target.value)}
                value={query} 
                />
        </div>
    )
}
