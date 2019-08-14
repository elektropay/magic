﻿/*
 * Magic, Copyright(c) Thomas Hansen 2019 - thomas@gaiasoul.com
 * Licensed as Affero GPL unless an explicitly proprietary license has been obtained.
 */

using System.Collections.Generic;
using magic.node;
using magic.signals.contracts;

namespace magic.hyperlambda
{
    [Slot(Name = "lambda")]
    public class Lambda : ISlot, IMeta
    {
        public void Signal(Node input)
        {
            var parser = new Parser(input.Get<string>());
            input.AddRange(parser.Lambda().Children);
            input.Value = null;
        }

        public IEnumerable<Node> GetArguments()
        {
            yield break;
        }
    }
}