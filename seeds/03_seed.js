/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('bugs').del()
  await knex('bugs').insert([
    { bug_id: 1, project_id: 1, user_id: 1, title: 'friends tab not working', description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah', code: 'friends.push(x)', status: 'todo', feedback: null, code_feedback: null, },
    { bug_id: 2, project_id: 1, user_id: 1, title: 'my dog ate my homework', description: 'rah rah rah rah rah rah rah rah rah rah rah rah rah rah rah rah rah', code: 'roscoStomach.push(homework)', status: 'review', feedback: null, code_feedback: null, },
    { bug_id: 3, project_id: 1, user_id: 1, title: 'a bug flew in my nose', description: 'oga-boga oga-boga oga-boga oga-boga oga-boga oga-boga oga-boga oga-boga', code: 'myNose.push(bug)', status: 'completed', feedback: null, code_feedback: null, },
    { bug_id: 4, project_id: 1, user_id: 1, title: 'trying to console log 0-10', description: 'waka-flaka waka-flaka waka-flaka waka-flaka waka-flaka waka-flaka waka-flaka ', code: 'for (let i = 1; i < 10; i++) {console.log(i)}', status: 'todo', feedback: null, code_feedback: null, },
    { bug_id: 5, project_id: 1, user_id: 1, title: 'im so tired', description: 'whoops', code: 'something.something = anything', status: 'completed', feedback: null, code_feedback: null, },
  ]);
};
