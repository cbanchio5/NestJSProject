import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove, AfterUpdate } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`inserted user with ${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`updated user with id ${this.id}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Remove user with id ${this.id}`);
  }

}
