import styles from './index.module.css'
export const Text = ({text,color,size})=>{
    return (
        <p
            className={styles.text}
            style={{
                color:color || 'black',
                fontSize:size || '16px'
        }}
        >
            {text}
        </p>
    )
}
