import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
    @IsNotEmpty({message: 'Quiz harus mempunyai sebuah title.'})
    @Length(3, 255, {message: 'title harus mempunyai minimal/lebih dari 3 huruf atau maksimal/kurang dari 255 huruf'})
    title: string

    @IsNotEmpty({message: 'Quiz harus mempunyai sebuah desc.'})
    @Length(10,255, {message: 'Desc harus mempunyai minimal atau lebih dari 3 huruf'})
    desc: string
}