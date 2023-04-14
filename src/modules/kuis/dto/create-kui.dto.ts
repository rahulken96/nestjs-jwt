import { IsBoolean, IsNotEmpty, IsNumber, Length } from "class-validator";

export class CreateKuiDto {
    @IsNotEmpty({ message: 'Quiz harus mempunyai sebuah title.' })
    @Length(3, 255, { message: 'title harus mempunyai minimal/lebih dari 3 huruf atau maksimal/kurang dari 255 huruf' })
    title: string

    @IsNotEmpty({ message: 'Quiz harus mempunyai sebuah desc.' })
    @Length(10, 255, { message: 'Harus mempunyai Description minimal atau lebih dari 3 huruf' })
    description: string

    @IsNotEmpty({ message: 'Quiz harus mempunyai sebuah aktivasi.' })
    @IsBoolean()
    isActive: boolean
}