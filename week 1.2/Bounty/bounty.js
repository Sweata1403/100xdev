/*
let sum = 0;
for(let i = 0; i < 100000000000; i ++){
    sum = sum + i;
}
console.log(sum);
*/

// When this code is run locally, it takes one core of the cpuUsage to 100%
// What is the reason you cannot see 100% cpu usage.
// Find the reason.


//The reason you cannot see 100% CPU usage when running this code locally, even though it is computationally intensive, is likely due to the following factors:

// 1. **Single-threaded Nature of JavaScript:**
// JavaScript, especially in a browser environment or Node.js, is single-threaded by default. This means it uses only one core of the CPU. Even if the code is very CPU-intensive, it will only utilize a single core of your multi-core processor.

// 2. **System Monitoring Tools:**
// The way system monitoring tools report CPU usage can vary. Tools like Task Manager on Windows or Activity Monitor on macOS might show the CPU usage as a percentage of the total CPU capacity, which can be misleading if you have multiple cores. For example, if you have a quad-core CPU, 100% usage of one core might show as 25% total CPU usage.

// 3. **Operating System Scheduling:**
// The operating system manages CPU resources and might switch the process between different cores. However, since the JavaScript code is single-threaded, it will not run on multiple cores simultaneously. The core handling the JavaScript thread will show high usage, but the overall usage across all cores might not reach 100%.

// ### Demonstration with Example

// To further illustrate this, here’s how you can understand the issue:

// 1. **Multi-core System:**
// Suppose you have a CPU with 4 cores. If one core is fully utilized by a single-threaded task, the overall CPU usage reported by the system might be 25%.

// 2. **Single-threaded Code:**
// The given JavaScript code is a single-threaded loop:
// ```javascript
// let sum = 0;
// for(let i = 0; i < 100000000000; i++) {
//     sum = sum + i;
// }
// console.log(sum);
// ```

// 3. **CPU Usage Reporting:**
// If you monitor the CPU usage:
// - A single core might show 100% usage.
// - Overall CPU usage might show 25% (assuming 4 cores, so 100% of one core is 25% of total).

// ### How to Verify

// To see the per-core usage, you can use system monitoring tools that show detailed CPU usage per core:

// - **Windows:**
// - Open Task Manager.
// - Go to the "Performance" tab.
// - Click on "CPU" to see usage per core.

// - **macOS:**
// - Open Activity Monitor.
// - Go to the "Window" menu.
// - Select "CPU Usage" to see per-core usage.

// - **Linux:**
// - Use tools like `htop` which can show per-core CPU usage.

// By examining the per-core usage, you will likely see that one core is at 100% while the overall CPU usage is lower, corresponding to the total number of cores on your system.