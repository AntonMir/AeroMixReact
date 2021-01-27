export const TODO_SOMETHING = "TODO_SOMETHING"


export function todoSomething(status) {
	return {
		type: TODO_SOMETHING,
		status: status
	}
}