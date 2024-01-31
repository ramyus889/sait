export default {
  root: ({props:e})=>({class:["relative","flex items-center",{"h-2 w-full min-w-[15rem]":e.orientation=="horizontal","w-2 h-full min-h-[15rem]":e.orientation=="vertical"},"border-0 rounded-lg","bg-surface-100 dark:bg-surface-700",{"opacity-60 select-none pointer-events-none cursor-default":e.disabled}]}),
  range: ({props:e})=>({class:["block absolute",{"top-0 left-0":e.orientation=="horizontal","bottom-0 left-0":e.orientation=="vertical"},{"h-full":e.orientation=="horizontal","w-full":e.orientation=="vertical"},"rounded-lg","bg-primary-500 dark:bg-primary-400"]}),
  handle: ({props:e})=>({class:["block","h-4","w-4",{"top-[50%] mt-[-0.5rem] ml-[-0.5rem]":e.orientation=="horizontal","left-[50%] mb-[-0.5rem] ml-[-0.5rem]":e.orientation=="vertical"},"rounded-full","ring-2","bg-surface-0 dark:bg-surface-900","ring-primary-500 dark:ring-primary-400","transition duration-200","cursor-grab","touch-action-none"]}),
  starthandler: ({props:e})=>({class:["block","h-4","w-4",{"top-[50%] mt-[-0.5rem] ml-[-0.5rem]":e.orientation=="horizontal","left-[50%] mb-[-0.5rem] ml-[-0.5rem]":e.orientation=="vertical"},"rounded-full","ring-2","bg-surface-0 dark:bg-surface-900","ring-primary-500 dark:ring-primary-400","transition duration-200","cursor-grab","touch-action-none"]}),
  endhandler: ({props:e})=>({class:["block","h-4","w-4",{"top-[50%] mt-[-0.5rem] ml-[-0.5rem]":e.orientation=="horizontal","left-[50%] mb-[-0.5rem] ml-[-0.5rem]":e.orientation=="vertical"},"rounded-full","ring-2","bg-surface-0 dark:bg-surface-900","ring-primary-500 dark:ring-primary-400","transition duration-200","cursor-grab","touch-action-none"]})
}