export const userRolesEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member"
}

export const AvailableUserRole = Object.values(userRolesEnum)

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done"
}

export const AvailableTaskStatus = Object.values(TaskStatusEnum)