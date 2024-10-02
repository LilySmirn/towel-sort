
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || !Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }

    if (Array.isArray(matrix) && matrix.length > 0) {
        let snake = [];
        for (let i = 0; i < matrix.length; i++) {
            if (Array.isArray(matrix[i])) {
                if (i % 2 === 0) {
                    snake.push(...matrix[i]);
                } else {
                    snake.push(...matrix[i].reverse());
                }
            }
        }

        return snake;
    }


    return [];
}
