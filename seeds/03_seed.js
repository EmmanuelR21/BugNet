/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('bugs').del()
  await knex('bugs').insert([
    { bug_id: 1, project_id: 6, user_id: 1, title: 'I can not seem to console log 0 through 10', description: 'For my Marcy Lab pre work I need to create a function that will log to the console 0 through 10. Im getting 1 through 9. Anyone can help?', code: 'for (let i = 1; i < 10; i += 1) {console.log(i)}', status: 'todo', feedback: null, code_feedback: null, },
    { bug_id: 2, project_id: 6, user_id: 1, title: 'My dog ate my homework', description: "My dog ate my homework and I thought it would be a good idea to apply coding to the situation. I keep getting an error but can't seem to find what's wrong.", code: "if (homework === 'tastey') roscoStomach.psuh(homework)", status: 'review', feedback: "You have a typo. Make sure to double check your spelling", code_feedback: "if (homework === 'tastey') roscoStomach.push(homework)", },
    { bug_id: 3, project_id: 6, user_id: 1, title: 'JavaScript Number Split into individual digits', description: "I am trying to solve a math problem where I take a number e.g. 45, or 111 and then split the number into separate digits e.g. 4 5 or 1 1 1. I will then save each number to a var to run a method on. Does anyone know how to split a number into individual digitals?", code: 'for (var i = 0; i < range.length; i++) {var n = range[i];}', status: 'completed', feedback: null, code_feedback: "var num = 123456; var digits = num.toString().split(''); var realDigits = digits.map(Number) console.log(realDigits);", },
  ]);
};
