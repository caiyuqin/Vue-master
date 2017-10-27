<template>
  <DocBody>
    <DocArticle>
      <DocSection id="affix" text="Affix">
        <DocExample>
        	<div>
        	  <router-link to="/test1">test1</router-link>
       			<router-link to="/test2">test2</router-link>   
        	</div>
          <h3>
            The sub-navigation on the RIGHT is a live demo of the affix.
          </h3>
        </DocExample>
        <DocCode>
&lt;Affix&gt; 
  &lt;li&gt;&lt;a href="#affix"&gt;Affix&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="#list"&gt;列表&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="#nav"&gt;导航&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="#tip"&gt;提示&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="#form"&gt;表单&lt;/a&gt;&lt;/li&gt; 
&lt;/Affix&gt;
        </DocCode>
      </DocSection>
      <DocSection id="button" text="Button">
        <DocExample>
          <Btn>按钮</Btn>
        </DocExample>
        <DocCode>
&lt;Btn&gt;按钮&lt;/Btn&gt;
        </DocCode>
        <DocTitle>修改文本、大小和class</DocTitle>
        <DocExample>
          <Btn btn="btn-primary btn-sm">修改文本、大小和class</Btn>
          <Btn btn="btn-warning">修改文本、大小和class</Btn>
          <Btn btn="btn-success btn-lg">修改文本、大小和class</Btn>
        </DocExample>
        <DocCode>
&lt;Btn btn="btn-primary btn-sm"&gt;修改文本、大小和class&lt;/Btn&gt; 
&lt;Btn btn="btn-warning"&gt;修改文本、大小和class&lt;/Btn&gt; 
&lt;Btn btn="btn-success btn-lg"&gt;修改文本、大小和class&lt;/Btn&gt;
        </DocCode>
        <DocTitle>带图标的按钮</DocTitle>
        <DocTip>
          默认情况下，添加在文字左侧，设置slot=
          <code>right</code>，可以添加至文字右侧
        </DocTip>
        <DocExample>
          <Btn>
            <img src="../assets/img/logo.png" />
            左侧图标
          </Btn>
          <Btn>
            右侧图标
            <img src="../assets/img/logo.png" />
          </Btn>
        </DocExample>
        <DocCode>
&lt;Btn&gt;&lt;img src="../assets/img/logo.png"/&gt;左侧图标&lt;/Btn&gt; 
&lt;Btn&gt;右侧图标&lt;img src="../assets/img/logo.png"/&gt;&lt;/Btn&gt;
        </DocCode>
        <DocTitle>原生点击事件</DocTitle>
        <DocExample>
          <Btn @click.native="nativeClick" btn="btn-primary">原生点击事件</Btn>
        </DocExample>
        <DocCode>
&lt;Btn @click.native="nativeClick"&gt;原生点击事件&lt;/Btn&gt;
        </DocCode>
        <DocTitle>组件点击事件</DocTitle>
        <DocExample>
          <Btn @btnClick="cptsClick" btn="btn-primary">组件点击事件</Btn>
        </DocExample>
        <DocCode>
&lt;Btn @btnClick="cptsClick"&gt;组件点击事件&lt;/Btn&gt;
        </DocCode>
      </DocSection>
      <DocSection id="dropdown" text="DropDown">
        <DocExample>
          <Drop>
            <li>
              <a href="javascript:">Action</a>
            </li>
            <li>
              <a href="javascript:">Another action</a>
            </li>
            <li>
              <a href="javascript:">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="javascript:">Separated link</a>
            </li>
          </Drop>
        </DocExample>
        <DocCode>
&lt;Drop&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Another action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Something else here&lt;/a&gt;&lt;/li&gt; 
  &lt;li role="separator" class="divider"&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Separated link&lt;/a&gt;&lt;/li&gt; 
&lt;/Drop&gt;
        </DocCode>
        <DocTitle>向上弹出</DocTitle>
        <DocTip>
          设置组件drop为
          <code>dropup</code>，可以让菜单向上弹出
        </DocTip>
        <DocExample>
          <Drop text="Dropup" drop="dropup">
            <li>
              <a href="javascript:">Action</a>
            </li>
            <li>
              <a href="javascript:">Another action</a>
            </li>
            <li>
              <a href="javascript:">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="javascript:">Separated link</a>
            </li>
          </Drop>
        </DocExample>
        <DocCode>
&lt;Drop drop="dropup"&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Another action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Something else here&lt;/a&gt;&lt;/li&gt; 
  &lt;li role="separator" class="divider"&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Separated link&lt;/a&gt;&lt;/li&gt; 
&lt;/Drop&gt;
        </DocCode>
        <DocTitle>按钮颜色</DocTitle>
        <DocTip>
          btn可设置按钮颜色
        </DocTip>
        <DocExample>
          <Drop text="Dropup" drop="dropup" btn="btn-success">
            <li>
              <a href="javascript:">Action</a>
            </li>
            <li>
              <a href="javascript:">Another action</a>
            </li>
            <li>
              <a href="javascript:">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="javascript:">Separated link</a>
            </li>
          </Drop>
        </DocExample>
        <DocCode>
&lt;Drop drop="dropup" btn="btn-success"&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Another action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Something else here&lt;/a&gt;&lt;/li&gt; 
  &lt;li role="separator" class="divider"&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Separated link&lt;/a&gt;&lt;/li&gt; 
&lt;/Drop&gt;
        </DocCode>
        <DocTitle>分裂式按钮下拉菜单</DocTitle>
        <DocTip>
          drop需设置为
          <code>btn-group</code>
        </DocTip>
        <DocExample>
          <Drop drop="btn-group" btn="btn-info" split="true">
            <li>
              <a href="javascript:">Action</a>
            </li>
            <li>
              <a href="javascript:">Another action</a>
            </li>
            <li>
              <a href="javascript:">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="javascript:">Separated link</a>
            </li>
          </Drop>
        </DocExample>
        <DocCode>
&lt;Drop drop="btn-group" btn="btn-info"&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Another action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Something else here&lt;/a&gt;&lt;/li&gt; 
  &lt;li role="separator" class="divider"&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Separated link&lt;/a&gt;&lt;/li&gt; 
&lt;/Drop&gt;
        </DocCode>
        <DocExample>
          <Drop drop="btn-group dropup" btn="btn-info" split="true">
            <li>
              <a href="javascript:">Action</a>
            </li>
            <li>
              <a href="javascript:">Another action</a>
            </li>
            <li>
              <a href="javascript:">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="javascript:">Separated link</a>
            </li>
          </Drop>
        </DocExample>
        <DocCode>
&lt;Drop drop="btn-group dropup" btn="btn-info"&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Another action&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Something else here&lt;/a&gt;&lt;/li&gt; 
  &lt;li role="separator" class="divider"&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="javascript:"&gt;Separated link&lt;/a&gt;&lt;/li&gt; 
&lt;/Drop&gt;
        </DocCode>
      </DocSection>
      <DocSection id="input" text="Input">
        <DocExample>
          <Ipt></Ipt>
        </DocExample>
        <DocCode>
&lt;Ipt&gt;&lt;/Ipt&gt;
        </DocCode>
        <DocTitle>额外元素</DocTitle>
        <DocTip>
          input每侧只能添加一个
          <code>.input-group-addon</code> 或
          <code>.input-group-btn</code> 元素
        </DocTip>
        <DocTip>
          额外元素默认添加至input左侧，设置
          <code>slot="right"</code> 可添加至input右侧
        </DocTip>
        <DocExample>
          <Ipt text="请输入金额">
            <span class="input-group-addon">$</span>
            <span class="input-group-addon" slot="right">.00</span>
          </Ipt>
        </DocExample>
        <DocCode>
&lt;Ipt text="请输入金额"&gt; 
  &lt;span class="input-group-addon"&gt;$&lt;/span&gt; 
  &lt;span class="input-group-addon" slot="right"&gt;.00&lt;/span&gt; 
&lt;/Ipt&gt;
        </DocCode>
        <DocTitle>作为额外元素的多选框和单选框</DocTitle>
        <DocExample>
          <Ipt>
            <span class="input-group-addon">
              <input type="checkbox">
            </span>
          </Ipt>
          <br>
          <Ipt>
            <span class="input-group-addon">
              <input type="radio">
            </span>
          </Ipt>
        </DocExample>
        <DocCode>
&lt;Ipt&gt; 
  &lt;span class="input-group-addon"&gt; 
    &lt;input type="checkbox"&gt; 
  &lt;/span&gt; 
&lt;/Ipt&gt; 
&lt;Ipt&gt; 
  &lt;span class="input-group-addon"&gt; 
    &lt;input type="radio"&gt; 
  &lt;/span&gt; 
&lt;/Ipt&gt;
        </DocCode>
        <DocTitle>作为额外元素的按钮</DocTitle>
        <DocExample>
          <Ipt>
            <span class="input-group-btn">
              <Btn>Go!</Btn>
            </span>
          </Ipt>
        </DocExample>
        <DocCode>
&lt;Ipt&gt; 
  &lt;span class="input-group-btn"&gt; 
    &lt;Btn&gt;Go!&lt;/Btn&gt; 
  &lt;/span&gt; 
&lt;/Ipt&gt;
        </DocCode>
        <DocTitle>作为额外元素的按钮式下拉菜单</DocTitle>
        <DocExample>
          <Ipt>
            <Drop drop="input-group-btn">
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#">Another action</a>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <a href="#">Separated link</a>
              </li>
            </Drop>
          </Ipt>
        </DocExample>
        <DocCode>
&lt;Ipt&gt; 
  &lt;Drop drop="input-group-btn"&gt; 
    &lt;li&gt;&lt;a href="#"&gt;Action&lt;/a&gt;&lt;/li&gt; 
    &lt;li&gt;&lt;a href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt; 
    &lt;li role="separator" class="divider"&gt;&lt;/li&gt; 
    &lt;li&gt;&lt;a href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt; 
  &lt;/Drop&gt; 
&lt;/Ipt&gt;
        </DocCode>
        <DocTitle>Multiple buttons</DocTitle>
        <DocTip>
          虽然一侧只能有一个
          <code>.input-group-addon</code> 或
          <code>.input-group-btn</code> 元素， 但
          <code>.input-group-btn</code> 里可添加多个按钮
        </DocTip>
        <DocExample>
          <Ipt>
            <div class="input-group-btn">
              <Btn text="">
                <span class="glyphicon glyphicon-bold"></span>
              </Btn>
              <Btn text="">
                <span class="glyphicon glyphicon-italic"></span>
              </Btn>
            </div>
          </Ipt>
        </DocExample>
        <DocCode>
&lt;Ipt&gt; 
  &lt;div class="input-group-btn"&gt; 
    &lt;Btn text=""&gt;&lt;span class="glyphicon glyphicon-bold"&gt;&lt;/span&gt;&lt;/Btn&gt; 
    &lt;Btn text=""&gt;&lt;span class="glyphicon glyphicon-italic"&gt;&lt;/span&gt;&lt;/Btn&gt; 
  &lt;/div&gt; 
&lt;/Ipt&gt;
        </DocCode>
      </DocSection>
      <DocSection id="nav" text="Nav">
        <DocExample>
          <Navi>
            <li role="presentation" class="active">
              <a href="#">Home</a>
            </li>
            <li role="presentation">
              <a href="#">Profile</a>
            </li>
            <li role="presentation">
              <a href="#">Messages</a>
            </li>
          </Navi>
        </DocExample>
        <DocCode>
&lt;Navi&gt; 
  &lt;li role="presentation" class="active"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt; 
  &lt;li role="presentation"&gt;&lt;a href="#"&gt;AProfile&lt;/a&gt;&lt;/li&gt; 
  &lt;li role="presentation"&gt;&lt;a href="#"&gt;Messages&lt;/a&gt;&lt;/li&gt; 
&lt;/Navi&gt;
        </DocCode>
        <DocTitle>胶囊式标签页</DocTitle>
        <DocExample>
          <Navi navi="nav-pills">
            <li role="presentation" class="active">
              <a href="#">Home</a>
            </li>
            <li role="presentation">
              <a href="#">Profile</a>
            </li>
            <li role="presentation">
              <a href="#">Messages</a>
            </li>
          </Navi>
        </DocExample>
        <DocCode>
&lt;Navi navi="nav-pills"&gt; 
  &lt;li role="presentation" class="active"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt; 
  &lt;li role="presentation"&gt;&lt;a href="#"&gt;AProfile&lt;/a&gt;&lt;/li&gt; 
  &lt;li role="presentation"&gt;&lt;a href="#"&gt;Messages&lt;/a&gt;&lt;/li&gt; 
&lt;/Navi&gt;
        </DocCode>
        <DocTip>
          胶囊式标签页也是可以垂直方向堆叠排列的。只需添加
          <code>.nav-stacked</code> 类
        </DocTip>
        <DocExample>
          <Navi navi="nav-pills nav-stacked nav-pills-stacked-example">
            <li role="presentation" class="active">
              <a href="#">Home</a>
            </li>
            <li role="presentation">
              <a href="#">Profile</a>
            </li>
            <li role="presentation">
              <a href="#">Messages</a>
            </li>
          </Navi>
        </DocExample>
        <DocCode>
&lt;Navi navi="nav-pills nav-stacked"&gt; ... &lt;/Navi&gt;
        </DocCode>
        <DocTitle>两端对齐的标签页</DocTitle>
        <DocExample>
          <Navi navi="nav-tabs nav-justified">
            <li role="presentation" class="active">
              <a href="#">Home</a>
            </li>
            <li role="presentation">
              <a href="#">Profile</a>
            </li>
            <li role="presentation">
              <a href="#">Messages</a>
            </li>
          </Navi>
          <br>
          <Navi navi="nav-pills nav-justified">
            <li role="presentation" class="active">
              <a href="#">Home</a>
            </li>
            <li role="presentation">
              <a href="#">Profile</a>
            </li>
            <li role="presentation">
              <a href="#">Messages</a>
            </li>
          </Navi>
        </DocExample>
        <DocCode>
&lt;Navi navi="nav-tabs nav-justified"&gt; ... &lt;/Navi&gt; 
&lt;Navi navi="nav-pills nav-justified"&gt; ... &lt;/Navi&gt;
        </DocCode>
        <DocTitle>添加下拉菜单</DocTitle>
        <DocTip>
          将组件hasDrop属性设置为
          <code>true</code>，可添加下拉菜单，下拉菜单的菜单项通过li的slot属性指明
        </DocTip>
        <DocExample>
          <Navi navi="nav-pills" hasDrop=true>
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li slot="drop">
              <a href="#">Action</a>
            </li>
            <li slot="drop">
              <a href="#">Another action</a>
            </li>
            <li slot="drop" class="divider"></li>
            <li slot="drop">
              <a href="#">Separated link</a>
            </li>
          </Navi>
        </DocExample>
        <DocCode>
&lt;Navi navi="nav-pills" hasDrop=true&gt; 
  &lt;li class="active"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt; 
  &lt;li&gt;&lt;a href="#"&gt;Profile&lt;/a&gt;&lt;/li&gt; 
  &lt;li slot="drop"&gt;&lt;a href="#"&gt;Action&lt;/a&gt;&lt;/li&gt; 
  &lt;li slot="drop"&gt;&lt;a href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt; 
  &lt;li slot="drop" class="divider"&gt;&lt;/li&gt; 
  &lt;li slot="drop"&gt;&lt;a href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt; 
&lt;/Navi&gt;
        </DocCode>
      </DocSection>
      <DocSection id="modal" text="Modal">
        <DocExample>
          <Btn btn="btn-primary" show="#modal1">biu~ 弹出模态框</Btn>
          <Modal id="modal1" text="标题">
            <p slot="body">One fine body...</p>
            <Btn slot="footer" btn="btn-primary">确定</Btn>
            <Btn slot="footer" hide="#modal1">取消</Btn>
          </Modal>
        </DocExample>
        <DocCode>
&lt;Btn show="#modal1"&gt;biu~ 弹出模态框&lt;/Btn&gt;
&lt;Modal id="modal1" text="标题"&gt; 
  &lt;p slot="body"&gt;One fine body...&lt;/p&gt; 
  &lt;Btn slot="footer" btn="btn-primary"&gt;确定&lt;/Btn&gt; 
  &lt;Btn slot="footer" hide="#modal1"&gt;取消&lt;/Btn&gt;
&lt;/Modal&gt;
        </DocCode>
        <DocTitle>模态框内容</DocTitle>
        <DocTip>
          <code>text</code>属性指定标题<br>
          <code>slot="body"</code>指定此内容填充至模态body<br>
          <code>slot="footer"</code>指定此内容填充至模态底部
        </DocTip>
        <DocExample>
          <Btn btn="btn-success" show="#modal6">弹出Modal</Btn>
          <Modal id="modal6" text="标题">
            <p slot="body">body</p>
            <Btn slot="footer" btn="btn-primary">底部按钮</Btn>
          </Modal>
        </DocExample>
        <DocCode>
&lt;Btn btn="btn-success" show="#modal6"&gt;弹出Modal&lt;/Btn&gt;
&lt;Modal id="modal6" text="标题"&gt; 
  &lt;p slot="body"&gt;body&lt;/p&gt; 
  &lt;Btn slot="footer" btn="btn-primary"&gt;底部按钮&lt;/Btn&gt; 
&lt;/Modal&gt;
        </DocCode>
        <DocTitle>按钮事件</DocTitle>
         <DocTip>
          <code>show</code>属性用于弹出模态框<br>
          <code>hide</code>属性用于关闭模态框<br>
        </DocTip>
        <DocExample>
          <Btn btn="btn-warning" show="#modal2">弹出Modal1</Btn>
          <Btn btn="btn-success" show="#modal3">弹出Modal2</Btn>
          <Modal id="modal2" text="Modal1">
            <p slot="body">One fine body...</p>
            <Btn slot="footer" btn="btn-primary">确定</Btn>
          </Modal>
          <Modal id="modal3" text="Modal2">
            <p slot="body">One fine body...</p>
            <Btn slot="footer" btn="btn-primary" hide="modal3">关闭模态框</Btn>
          </Modal>
        </DocExample>
        <DocCode>
&lt;Btn btn="btn-warning" show="#modal2"&gt;弹出Modal1&lt;/Btn&gt;
&lt;Btn btn="btn-success" show="#modal3"&gt;弹出Modal2&lt;/Btn&gt;
&lt;Modal id="modal2" text="Modal1"&gt; 
  &lt;p slot="body"&gt;One fine body...&lt;/p&gt; 
  &lt;Btn slot="footer" btn="btn-primary"&gt;确定&lt;/Btn&gt; 
&lt;/Modal&gt;
&lt;Modal id="modal3" text="Modal2"&gt; 
  &lt;p slot="body"&gt;One fine body...&lt;/p&gt; 
  &lt;Btn slot="footer" btn="btn-primary"&gt;确定&lt;/Btn&gt; 
&lt;/Modal&gt;
        </DocCode>
        <DocTitle>关闭的同时打开新模态</DocTitle>
         <DocTip>
          <code>show</code>属性用于弹出模态框<br>
        </DocTip>
        <DocExample>
          <Btn btn="btn-primary" show="#modal4">弹出Modal1</Btn>
          <Modal id="modal4" text="我是旧模态框">
            <p slot="body">One fine body...</p>
            <Btn slot="footer" btn="btn-primary" hide="#modal4" show="#modal5">打开新模态框</Btn>
          </Modal>
          <Modal id="modal5" text="我是新模态框">
            <p slot="body">One fine body...</p>
            <Btn slot="footer" btn="btn-primary" hide="#modal5">确定</Btn>
          </Modal>
        </DocExample>
        <DocCode>
&lt;Btn btn="btn-primary" show="#modal4"&gt;弹出Modal1&lt;/Btn&gt;
&lt;Modal id="modal4" text="Modal1"&gt; 
  &lt;p slot="body"&gt;One fine body...&lt;/p&gt; 
  &lt;Btn slot="footer" btn="btn-primary"&gt;确定&lt;/Btn&gt; 
&lt;/Modal&gt;
        </DocCode>
      </DocSection>
      <DocSection id="pagination" text="pagination">
				<DocExample>
					<Pag>
						<li>
							<a href="javascript:;"> 1</a>
						</li>
						<li>
							<a href="javascript:;"> 2</a>
						</li>
						<li>
							<a href="javascript:;"> 3</a>
						</li>
						<li>
							<a href="javascript:;"> 4</a>
						</li>
						<li>
							<a href="javascript:;"> 5</a>
						</li>
					</Pag>
				</DocExample>
				<DocCode>
&lt;nav aria-label="Page navigation"&gt;
  &lt;ul class="pagination"&gt;
    &lt;li&gt;
      &lt;a href="#" aria-label="Previous"&gt;
        &lt;span aria-hidden="true"&gt;&laquo;&lt;/span&gt;
      &lt;/a&gt;
    &lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;4&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;5&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;
      &lt;a href="#" aria-label="Next"&gt;
        &lt;span aria-hidden="true"&gt;&raquo;&lt;/span&gt;
      &lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;	
				</DocCode>
				<DocTitle>禁用和激活状态</DocTitle>
				<DocTip>
					链接在不同情况下可以定制。你可以给不能点击的链接添加 <code>.disabled</code>类、给当前页添加 <code>.active </code>类。
				</DocTip>
				<DocExample>
					<Pag show="true"></Pag>
				</DocExample>
				<DocCode>
&lt;nav aria-label="..."&gt;
  &lt;ul class="pagination"&gt;
    &lt;li class="disabled"&gt;
      &lt;span&gt;
        &lt;span aria-hidden="true"&gt;&laquo;&lt;/span&gt;
      &lt;/span&gt;
    &lt;/li&gt;
    &lt;li class="active"&gt;
      &lt;span&gt;1 &lt;span class="sr-only"&gt;(current)&lt;/span&gt;&lt;/span&gt;
    &lt;/li&gt;
    ...
  &lt;/ul&gt;
&lt;/nav&gt;				
				</DocCode>
				<DocTitle>尺寸</DocTitle>
				<DocTip>想要更小或更大的分页？<code>.pagination-lg </code>或<code>.pagination-sm</code>类提供了额外可供选择的尺寸。</DocTip>
				<DocExample>
					<nav aria-label="...">
						<Pag pagelg=true>
							<li>
								<a href="javascript:;"> 1</a>
							</li>
							<li>
								<a href="javascript:;"> 2</a>
							</li>
							<li>
								<a href="javascript:;"> 3</a>
							</li>
							<li>
								<a href="javascript:;"> 4</a>
							</li>
							<li>
								<a href="javascript:;"> 5</a>
							</li>
						</Pag>
					</nav>
					<nav aria-label="...">
						<Pag>
							<li>
								<a href="javascript:;"> 1</a>
							</li>
							<li>
								<a href="javascript:;"> 2</a>
							</li>
							<li>
								<a href="javascript:;"> 3</a>
							</li>
							<li>
								<a href="javascript:;"> 4</a>
							</li>
							<li>
								<a href="javascript:;"> 5</a>
							</li>
						</Pag>
					</nav>
					<nav aria-label="...">
						<Pag pagesm=true>
							<li>
								<a href="javascript:;"> 1</a>
							</li>
							<li>
								<a href="javascript:;"> 2</a>
							</li>
							<li>
								<a href="javascript:;"> 3</a>
							</li>
							<li>
								<a href="javascript:;"> 4</a>
							</li>
							<li>
								<a href="javascript:;"> 5</a>
							</li>
						</Pag>
					</nav>
				</DocExample>
			</DocSection>
			<DocSection id="collapse" text="collapse">
				<DocTip>扩展默认的折叠行为，以创建带有面板组件的手风琴。</DocTip>
				<DocExample>
          			<Coll show="true"></Coll>
				</DocExample>
				<DocCode>
&lt;div class="panel-group"&gt;
  &lt;div class="panel panel-default"&gt;
    &lt;div class="panel-heading"&gt;
      &lt;h4 class="panel-title"&gt;
        &lt;a&gt;
          Collapsible Group Item #1
        &lt;/a&gt;
      &lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class="panel-collapse collapse"&gt;
      &lt;div class="panel-body"&gt;
      	  Collapsible Group Item #1
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="panel panel-default"&gt;
    &lt;div class="panel-heading"&gt;
      &lt;h4 class="panel-title"&gt;
        &lt;a&gt;
          Collapsible Group Item #2
        &lt;/a&gt;
      &lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class="panel-collapse collapse"&gt;
     &lt;div class="panel-body"&gt;
      	  Collapsible Group Item #2
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="panel panel-default"&gt;
    &lt;div class="panel-heading"&gt;
      &lt;h4 class="panel-title"&gt;
        &lt;a&gt;
          Collapsible Group Item #3
        &lt;/a&gt;
      &lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class="panel-collapse collapse"&gt;
     &lt;div class="panel-body"&gt;
      	  Collapsible Group Item #3
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
				</DocCode>
				<DocTip>也可以换掉.<code>.panel-bodys</code>s with<code>.list-group</code>s</DocTip>
				<DocExample>
          			<Coll></Coll>
				</DocExample>
			</DocSection>
    </DocArticle>
    <DocAside>
      <Affix>
				<li>
					<a href="#affix">Affix</a>
				</li>
				<li>
					<a href="#button">Button 按钮</a>
				</li>
				<li>
					<a href="#dropdown">DropDown 下拉菜单</a>
				</li>
				<li>
					<a href="#input">Input 输入框组</a>
				</li>
				<li>
					<a href="#nav">Nav 导航</a>
				</li>
				<li>
					<a href="#modal">Modal 模态框</a>
				</li>
				<li>
					<a href="#pagination">Pagination 分页</a>
				</li>
				<li>
					<a href="#collapse">Collapse 面板</a>
				</li>
			</Affix>
    </DocAside>
  </DocBody>
</template>
<script>
	import VueCpts from "../components"
	import DocCpts from "../docCpts"
	export default {
		components: {
			DocArticle: DocCpts.DocArticle,
			DocAside: DocCpts.DocAside,
			DocBody: DocCpts.DocBody,
			DocCode: DocCpts.DocCode,
			DocExample: DocCpts.DocExample,
			DocSection: DocCpts.DocSection,
			DocTip: DocCpts.DocTip,
			DocTitle: DocCpts.DocTitle,
			Affix: VueCpts.Affix,
			Btn: VueCpts.Btn,
			Ipt: VueCpts.Ipt,
			Drop: VueCpts.Drop,
			Navi: VueCpts.Navi,
			Modal: VueCpts.Modal,
			Pag: VueCpts.Pag,
			Coll: VueCpts.Coll
		},
		methods: {
			nativeClick() {
				alert("我是原生点击事件~");
			},
			cptsClick() {
				alert("我是组件点击事件~");
			}
		}
	}
</script>

