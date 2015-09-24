var IR_AfterHooks = {
  mathJaxTypeset: function() { MathJax.Hub.Queue(["Typeset",MathJax.Hub]); }
};

Router.onAfterAction(IR_AfterHooks.mathJaxTypeset);