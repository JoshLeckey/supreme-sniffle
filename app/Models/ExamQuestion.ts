import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ExamQuestion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'questionType' })
  public questionType: string

  @column({ columnName: 'questionCategory' })
  public questionCategory: string

  @column({ columnName: 'question' })
  public question: string

  @column({ columnName: 'answer' })
  public answer: string

  @column({ columnName: 'question_difficulty' })
  public questionDifficulty: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
