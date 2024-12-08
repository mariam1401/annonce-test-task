import styles from './index.module.css'
export const Button = ({text,color,background,borderColor})=>{
    return (
        <button
            className={styles.button}
            style={{
                color:color || 'white',
                backgroundColor:background || 'transparent',
                borderColor:borderColor || 'transparent'
            }}
        >
            {text}
        </button>
    )
}
