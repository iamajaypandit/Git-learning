//thus is todays learning 
// Working on feature
//        ↓
// Unfinished changes
//        ↓
// Need to switch branch
//        ↓
// git stash
//        ↓
// Work on another branch
//        ↓
// Come back to feature
//        ↓
// git stash pop
//        ↓
// Continue your unfinished work

// git stash pop
//      ↓
// restore changes + delete stash

// git stash apply
//      ↓
// restore changes + keep stash

// # You're working on something
// git status

// # Suddenly need to switch branch
// git stash

// # Switch branch
// git checkout main

// # Do your work...

// # Come back to your branch
// git checkout feature

// # Get your unfinished work back
// git stash pop

// git status 
// git stash list
// git stash show
// git stash show -p //pop
// git stash apply stash@{0} //apply
// git stash drop stash@{0} //drop
// git stash clear //clear
// git stash save "message"//save changes with message
// git stash push -m "message" // commit changes with message
// git stash branch <branchname> stash@{0}//create new branch from stash

// | Command | What happens |
// |---|---|
// | `git stash` | Save changes temporarily |
// | `git stash list` | See saved stashes |
// | `git stash apply` | Restore changes + keep stash |
// | `git stash pop` | Restore changes + delete stash |
// | `git stash drop` | Delete a stash |
// | `git stash clear` | Delete all stashes |

// branching is a powerful feature in Git that allows you to diverge from the main line 
// of development and continue to do work without messing with that main line.
// The main line is usually called the master branch, but you can name it whatever you want.
// When you create a branch, you create an environment where you can try out new ideas without affecting the main line of development.
// You can create a branch, make changes, and then merge those changes back into the main line when you're ready.
// git branch <branchname> //create new branch
// git bracnch switch <branchname> //switch to branch
// git branch -d <branchname> //delete branch

// Forking
// Forking is the process of creating a personal copy of another user's repository in your own GitHub account. 
// It allows you to make changes independently without affecting the original repository.
//What is Scratch?
// Definition (English):
// From scratch means creating or building something from the beginning,
//  without using an existing ready-made project as your starting point.

// Hinglish: Matlab ekdum zero se khud project banana, kisi existing project ko fork ya clone kiye bina.
// function printHollowRhombus(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let space = 1; space <= n - i; space++) {
//       row += " ";
//     }
//     for (let j = 1; j <= n; j++) {
    
//       if (i === 1 || i === n || j === 1 || j === n) {
//         row += "*";
//       } else {
//         row += " "; 
//       }
//     }
//     console.log(row);
//   }
// }

// printHollowRhombus(5);
let n =5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let space = 1; space <= n - i; space++) {
        row += " ";
    }
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += "*";
        } else {
            row += " "; 
        }
    }
    console.log(row);
}