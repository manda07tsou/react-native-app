import * as SQLITE from 'expo-sqlite'
import { WriteTodoType } from '@/types/todo';
import { TodoItemTypes } from '@/types/todo';

const DB_NAME = 'todos.db'

let db: SQLITE.SQLiteDatabase | null = null

export const getDb = async () => {
    if(!db){
        db = await SQLITE.openDatabaseAsync(DB_NAME)
    }
    return db
}

export const initDatabase = async () => {
    const db = await getDb()

    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL
        );
        `);
        console.log('Base de données initialisée avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la DB :', error);
    }
}


export async function newTodo (data: WriteTodoType){
    const db = await getDb()

    try {
        const res = await db.runAsync('INSERT INTO todos (content) VALUES (?)', data.content)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getAllTodos(){
    const db = await getDb()

    try {
        const res = await db.getAllAsync<TodoItemTypes>('SELECT * FROM todos')
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTodo(id: number){
    const db = await getDb()

    try {
        const res = await db.runAsync('DELETE FROM todos WHERE id = ?', id)
    } catch (error) {
        console.log(error)
    }
}
