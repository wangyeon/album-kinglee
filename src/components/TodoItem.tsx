import styles from './TodoItem.module.scss'

interface Props{
    item: string
}

function TodoItem({ item}: Props) {
    return (
        <div className={styles.todo_list}>{item}</div>
    )
}

export default TodoItem
