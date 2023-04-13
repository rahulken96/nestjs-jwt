import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('quizes')
export class Kui {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar'})
    title: string

    @Column({type: 'text'})
    description: string    

    @Column({
        type: 'boolean',
        default: 1
    })
    isActive: boolean
}
