const nums = [2, 7, 11, 15];
const target = 17;

function index(nums, target) {
    const map = {}; // Armazenar números e seus índices
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Número que precisa somar com nums[i] para atingir o target
        if (map[complement] !== undefined) {
            return [map[complement], i]; // Retorna os índices
        }
        map[nums[i]] = i; // Armazena o número e seu índice
    }
    return null; // Se não encontrar a soma
}

console.log(index(nums, target)); // Saída: [0, 1]
