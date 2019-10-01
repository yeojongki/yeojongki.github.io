class Login extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		this.left = 0;
		this.right = 0;
		this.top = 0;
		this.bottom = 0;
		super.childrenCreated();
	}

}