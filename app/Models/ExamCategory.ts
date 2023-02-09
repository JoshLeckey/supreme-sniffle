import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ExamCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'exam_category' })
  public examCategory: string

  @column({ columnName: 'keyrange' })
  public keyrange: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
