//----------- 排 序 ------------------------------------------- 
function TableSorter(table){ 
this.Table = this.$(table); 
// alert(this.Table.innerHTML); 
if(this.Table.rows.length <= 1){ 
return; 
}

// alert(arguments[0]); 
this.Init(arguments);

} 
// 以下样式针对表头的单元格. 
TableSorter.prototype.NormalCss = "NormalCss";// 没有执行排序时的样式. 
TableSorter.prototype.SortAscCss = "SortAscCss";// 升序排序时的样式. 
TableSorter.prototype.SortDescCss = "SortDescCss";// 降序排序时的样式.

// 初始化table的信息和操作. 
TableSorter.prototype.Init = function(args){ 
this.ViewState = []; 
// 设置表头的状态位，排序时根据状态判断升降序 
for(var x = 0; x < this.Table.rows[0].cells.length; x++){ 
this.ViewState[x] = false; 
} 
// 参数args为数组，判断表头的那些字段需要排序，数组的第一个参数为要排序的表 
if(args.length > 1){ 
for(var x = 1; x < args.length; x++){ 
// 循环判断每一个需要排序的表头字段的下标，是否大于表头的最大下标； 
// 如果大的话说明是一个手误 
// 如果正确在需要排序的表头字段添加onclick方法和相对的样式 
// 代码:new TableSorter("tb2", 0, 2, 5, 6);<br /> 
// 效果:点击表头0,2,5,6列可执行排序.<br /> 
if(args[x] > this.Table.rows[0].cells.length){ 
continue; 
} 
else{ 
this.Table.rows[0].cells[args[x]].onclick = this.GetFunction(this,"Sort",args[x]); 
this.Table.rows[0].cells[args[x]].style.cursor = "pointer"; 
} 
} 
} 
// 参数不大于1，说明所有的字段都需要排序 
else{ 
for(var x = 0; x < this.Table.rows[0].cells.length; x++){ 
this.Table.rows[0].cells[x].onclick = this.GetFunction(this,"Sort",x); 
this.Table.rows[0].cells[x].style.cursor = "pointer"; 
} 
} 
} 
// 简写document.getElementById方法. 
TableSorter.prototype.$ = function(element){ 
return document.getElementById(element); 
}

// 取得指定对象的脱壳函数. 
TableSorter.prototype.GetFunction = function(variable,method,param){ 
// 在这里需要说明一下，variable-->对应的是this，method-->对应的是"Sort"，param对应的是需要排序表头的下标 
// this代表这个类，其中包括所用的方法和属性。下面的方法相当于调用Sort()方法 
return function(){ 
variable[method](param); 
} 
}

// 执行排序. 
TableSorter.prototype.Sort = function(col){ 
// 定义判断排序字段的一个标志位，数字排序(自己写)和字符排序(JavaScript内置函数) 
var SortAsNumber = true; 
// 为表头设置样式 
for(var x = 0; x < this.Table.rows[0].cells.length; x++){ 
this.Table.rows[0].cells[x].className = this.NormalCss; 
} 
// 定义放置需要排序的行数组 
var Sorter = []; 
for(var x = 1; x < this.Table.rows.length; x++){ 
Sorter[x-1] = [this.Table.rows[x].cells[col].innerHTML, x]; 
// alert(Sorter[x-1]); 
// 判断需要排序字段的类型，分为数字型和非数字型 
SortAsNumber = SortAsNumber && this.IsNumeric(Sorter[x-1][0]); 
// alert(Sorter[x-1][0]); 
} 
// 如果是数字型采用下面的方法排序 
if(SortAsNumber){ 
for(var x = 0; x < Sorter.length; x++){ 
for(var y = x + 1; y < Sorter.length; y++){ 
if(parseFloat(Sorter[y][0]) < parseFloat(Sorter[x][0])){ 
var tmp = Sorter[x]; 
Sorter[x] = Sorter[y]; 
Sorter[y] = tmp; 
} 
} 
} 
} 
// 如果是非数字型的可以采用内置方法sort()排序 
else{ 
Sorter.sort(); 
} 
if(this.ViewState[col]){ 
// JavaScript内置函数，用于颠倒数组中元素的顺序。 
Sorter.reverse(); 
this.ViewState[col] = false; 
this.Table.rows[0].cells[col].className = this.SortDescCss; 
} 
else{ 
this.ViewState[col] = true; 
this.Table.rows[0].cells[col].className = this.SortAscCss; 
} 
var Rank = []; 
for(var x = 0; x < Sorter.length; x++){ 
Rank[x] = this.GetRowHtml(this.Table.rows[Sorter[x][1]]); 
} 
// alert(Rank[0]); 
for(var x = 1; x < this.Table.rows.length; x++){ 
for(var y = 0; y < this.Table.rows[x].cells.length; y++){ 
this.Table.rows[x].cells[y].innerHTML = Rank[x-1][y]; 
// alert(Rank[x-1][y]); 
} 
} 
this.OnSorted(this.Table.rows[0].cells[col], this.ViewState[col]); 
}


// 取得指定行的内容. 
TableSorter.prototype.GetRowHtml = function(row){ 
var result = []; 
for(var x = 0; x < row.cells.length; x++){ 
result[x] = row.cells[x].innerHTML; 
} 
return result; 
}

TableSorter.prototype.IsNumeric = function(num){ 
return /^\d+(\.\d+)?$/.test(num); 
}

// 可自行实现排序后的动作. 
TableSorter.prototype.OnSorted = function(cell, IsAsc){ 
return; 
}

