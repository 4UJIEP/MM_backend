// users.model.ts
// Сущности: teacher, parent, child, school, position, teacher_position, knowledge, child_knowledge, questions, child_questions
export type UUID = string;

export interface School {
  id: UUID;
  schoolName: string;
}

export interface Parent {
  id: UUID;
  surname?: string | null;
  name?: string | null;
  patronymic?: string | null;
  birthDay?: string | null; // ISO date string, e.g. "2000-01-01"
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  isActive?: boolean;
}

export interface Child {
  id: UUID;
  parentId?: UUID; // FK -> Parent.id
  surname?: string | null;
  name?: string | null;
  patronymic?: string | null;
  birthDay?: string | null;
  address?: string | null;
  schoolId?: UUID; // FK -> School.id
  classNumber?: number | null;
  phone?: string | null;

  // Опционально: при populate
  parent?: Parent;
  school?: School;
}

export interface Teacher {
  id: UUID;
  userId?: UUID | null; // FK на учетную запись (teacher_user)
  name?: string | null;
  surname?: string | null;
  patronymic?: string | null;
  phone?: string | null;
  email?: string | null;
  workExperience?: number | null;
  workPlace?: string | null;
  isActive?: boolean;

  // Опционально: связанные позиции
  positions?: TeacherPosition[];
}

export interface Position {
  id: UUID;
  positionName?: string | null;
}

export interface TeacherPosition {
  id: UUID;
  teacherId: UUID; // FK -> Teacher.id
  positionId: UUID; // FK -> Position.id

  // optional populated relations
  teacher?: Teacher;
  position?: Position;
}

export interface Knowledge {
  id: UUID;
  knowledgeName?: string | null;
}

export interface ChildKnowledge {
  id: UUID;
  childId: UUID; // FK -> Child.id
  knowledgeId: UUID; // FK -> Knowledge.id

  // optional populated relations
  child?: Child;
  knowledge?: Knowledge;
}

export interface Question {
  id: UUID;
  question?: string | null;
}

export interface ChildQuestion {
  id: UUID;
  childId: UUID; // FK -> Child.id
  questionId: UUID; // FK -> Question.id
  questionDate?: string | null; // ISO date

  // optional populated relations
  child?: Child;
  question?: Question;
}
